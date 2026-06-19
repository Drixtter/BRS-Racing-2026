// BRS Racing 2026 — Painel Admin Local
// Uso: cd admin && npm install && npm start
// Acesse: http://localhost:4000  (senha padrão: brs2026)

const express = require('express');
const fs      = require('fs');
const path    = require('path');
const { execSync } = require('child_process');
const session = require('express-session');

const app      = express();
const PORT     = 4000;
const PASSWORD = process.env.ADMIN_PASSWORD || 'brs2026';
const ROOT     = path.join(__dirname, '..');
const CFG_PATH = path.join(ROOT, 'config.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'brs-racing-admin-2026',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }   // 8 horas
}));
app.use(express.static(path.join(__dirname, 'public')));

// ── CONFIG I/O ───────────────────────────────────────────────────
function readConfig() {
    const src = fs.readFileSync(CFG_PATH, 'utf8');
    // Avalia o arquivo sem depender de require (evita cache do módulo)
    const fn = new Function(src.replace(/const CONFIG\s*=/, 'var __C =') + '; return __C;');
    return fn();
}

function writeConfig(cfg) {
    const header =
`// ╔══════════════════════════════════════════════════════════════╗
// ║         BRS RACING 2026 — ARQUIVO DE CONFIGURAÇÃO            ║
// ║                                                              ║
// ║  ✅ COMO ATUALIZAR APÓS CADA ETAPA:                          ║
// ║  1. Acesse o painel admin: http://localhost:4000             ║
// ║  2. Vá em "Lançar Resultado" e preencha os dados            ║
// ║  3. Clique em "Salvar" e depois em "Publicar"               ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = `;
    fs.writeFileSync(CFG_PATH, header + JSON.stringify(cfg, null, 2) + ';\n', 'utf8');
}

// ── MIDDLEWARE AUTH ──────────────────────────────────────────────
function auth(req, res, next) {
    if (req.session.auth) return next();
    res.status(401).json({ error: 'Não autenticado' });
}

// ── ROTAS: AUTH ──────────────────────────────────────────────────
app.post('/api/login', (req, res) => {
    if (req.body.password === PASSWORD) {
        req.session.auth = true;
        res.json({ ok: true });
    } else {
        res.status(401).json({ error: 'Senha incorreta' });
    }
});

app.post('/api/logout', (req, res) => {
    req.session.destroy(() => res.json({ ok: true }));
});

app.get('/api/check', (req, res) => {
    res.json({ auth: !!req.session.auth });
});

// ── ROTAS: DADOS ─────────────────────────────────────────────────
app.get('/api/config', auth, (req, res) => {
    try   { res.json(readConfig()); }
    catch (e) { res.status(500).json({ error: e.message }); }
});

// Salvar resultado de uma etapa
app.post('/api/resultado', auth, (req, res) => {
    try {
        const { pistasIdx, resultados } = req.body;
        const cfg = readConfig();
        cfg.pistas[pistasIdx].resultados = resultados;
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Adicionar vídeo
app.post('/api/video', auth, (req, res) => {
    try {
        const cfg = readConfig();
        cfg.videos.unshift(req.body);
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Adicionar foto à galeria
app.post('/api/galeria', auth, (req, res) => {
    try {
        const cfg = readConfig();
        cfg.galeria.unshift(req.body);
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Adicionar novo piloto
app.post('/api/piloto', auth, (req, res) => {
    try {
        const { piloto, cups } = req.body;
        const cfg = readConfig();
        if (cfg.pilotos.find(p => p.nome === piloto.nome))
            return res.status(400).json({ error: 'Já existe um piloto com esse nome.' });
        cfg.pilotos.push(piloto);
        cups.forEach(cup => {
            if (cfg.campeonatos[cup] && !cfg.campeonatos[cup].pilotos.includes(piloto.nome))
                cfg.campeonatos[cup].pilotos.push(piloto.nome);
        });
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Editar piloto existente
app.put('/api/piloto', auth, (req, res) => {
    try {
        const { nomeOriginal, piloto, cups } = req.body;
        const cfg = readConfig();
        const idx = cfg.pilotos.findIndex(p => p.nome === nomeOriginal);
        if (idx === -1) return res.status(404).json({ error: 'Piloto não encontrado.' });
        cfg.pilotos[idx] = piloto;
        // Renomeia nos campeonatos e resultados históricos se o nome mudou
        if (nomeOriginal !== piloto.nome) {
            ['ignition', 'evolution', 'legacy'].forEach(cup => {
                const i = cfg.campeonatos[cup].pilotos.indexOf(nomeOriginal);
                if (i !== -1) cfg.campeonatos[cup].pilotos[i] = piloto.nome;
            });
            cfg.pistas.forEach(p => p.resultados.forEach(r => {
                if (r.piloto === nomeOriginal) r.piloto = piloto.nome;
            }));
        }
        // Atualiza participação nos campeonatos
        ['ignition', 'evolution', 'legacy'].forEach(cup => {
            const inCup = cups.includes(cup);
            const pos   = cfg.campeonatos[cup].pilotos.indexOf(piloto.nome);
            if (inCup && pos === -1) cfg.campeonatos[cup].pilotos.push(piloto.nome);
            if (!inCup && pos !== -1) cfg.campeonatos[cup].pilotos.splice(pos, 1);
        });
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Adicionar nova etapa (nova pista + entrada no calendário)
app.post('/api/etapa', auth, (req, res) => {
    try {
        const { cup, pista, calendario } = req.body;
        const cfg = readConfig();
        const pistasIdx = cfg.pistas.length;
        cfg.pistas.push({ ...pista, resultados: [] });
        cfg.calendario[cup].push({ ...calendario, pistasIdx });
        writeConfig(cfg);
        res.json({ ok: true, pistasIdx });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Editar etapa existente (preserva resultados)
app.put('/api/etapa', auth, (req, res) => {
    try {
        const { pistasIdx, pista, cup, calIdx, calendario } = req.body;
        const cfg = readConfig();
        const resultados = cfg.pistas[pistasIdx]?.resultados || [];
        cfg.pistas[pistasIdx] = { ...pista, resultados };
        if (cup !== undefined && calIdx !== undefined)
            cfg.calendario[cup][calIdx] = { ...cfg.calendario[cup][calIdx], ...calendario };
        writeConfig(cfg);
        res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Git push → deploy automático no Neocities
app.post('/api/publicar', auth, (req, res) => {
    try {
        const msg = (req.body.msg || `Atualização ${new Date().toLocaleDateString('pt-BR')}`).replace(/"/g, "'");
        execSync('git add config.js', { cwd: ROOT });
        try {
            execSync(`git commit -m "${msg}"`, { cwd: ROOT });
        } catch (e) {
            // "nothing to commit" não é erro real
            const out = (e.stdout?.toString() || '') + (e.stderr?.toString() || '');
            if (!out.includes('nothing to commit')) throw e;
        }
        execSync('git push', { cwd: ROOT });
        res.json({ ok: true });
    } catch (e) {
        res.status(500).json({ error: e.stderr?.toString() || e.message });
    }
});

app.listen(PORT, () => {
    console.log('\n╔══════════════════════════════════════╗');
    console.log('║  🏎  BRS Admin                        ║');
    console.log(`║  http://localhost:${PORT}               ║`);
    console.log('║  Senha padrão: brs2026                ║');
    console.log('╚══════════════════════════════════════╝\n');
});
