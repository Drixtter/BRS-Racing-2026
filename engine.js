// ╔══════════════════════════════════════════════════════════════╗
// ║              BRS RACING 2026 — ENGINE                        ║
// ║  Lê CONFIG (config.js) e calcula classificações              ║
// ║  automaticamente. Não edite este arquivo.                    ║
// ╚══════════════════════════════════════════════════════════════╝

const BRS = (() => {

  // Lookups rápidos por nome
  const _pilotoMap = {};
  CONFIG.pilotos.forEach(p => { _pilotoMap[p.nome] = p; });

  const _equipeMap = {};
  CONFIG.equipes.forEach(e => { _equipeMap[e.nome] = e; });

  // ── PILOTOS ──────────────────────────────────────────────────
  function calcDrivers(cup) {
    const pilotos  = CONFIG.campeonatos[cup].pilotos;
    const indices  = CONFIG.calendario[cup].map(c => c.pistasIdx);

    // Inicializa acumuladores sem equipe ainda — será resolvida pelo histórico
    const acc = {};
    pilotos.forEach(nome => {
      const p = _pilotoMap[nome] || {};
      acc[nome] = {
        nome,
        equipe: "—",   // preenchida abaixo pelo último resultado deste cup
        foto:   p.foto || "",
        cor:    "#888",
        points: 0,
        wins:   0,
        poles:  0
      };
    });

    // Soma pontos e vitórias; captura a equipe mais recente neste cup
    indices.forEach(idx => {
      const pista = CONFIG.pistas[idx];
      if (!pista) return;
      pista.resultados.forEach(r => {
        if (!acc[r.piloto]) return;
        acc[r.piloto].points += r.pontos;
        if (r.pos === 1) acc[r.piloto].wins += 1;
        // Atualiza equipe e cor com o dado histórico desta etapa
        // (a última etapa processada vence — reflete a equipe mais recente no cup)
        if (r.equipe) {
          acc[r.piloto].equipe = r.equipe;
          acc[r.piloto].cor    = _equipeMap[r.equipe]?.cor || "#888";
        }
      });
    });

    // Fallback: pilotos sem nenhuma etapa disputada ainda usam o cadastro atual
    pilotos.forEach(nome => {
      if (acc[nome].equipe === "—") {
        const p = _pilotoMap[nome] || {};
        acc[nome].equipe = p.equipe || "—";
        acc[nome].cor    = _equipeMap[p.equipe]?.cor || "#888";
      }
    });

    // Soma poles deste cup
    CONFIG.poles
      .filter(p => p.camp === cup)
      .forEach(p => {
        if (acc[p.piloto]) acc[p.piloto].poles += 1;
      });

    // Ordena: pontos desc → vitórias desc → ordem do array de pilotos do campeonato
    // (quando todos têm 0 pontos, mantém a ordem definida em CONFIG.campeonatos[cup].pilotos)
    const ordemCup = {};
    pilotos.forEach((nome, i) => { ordemCup[nome] = i; });

    return Object.values(acc).sort((a, b) =>
      b.points - a.points || b.wins - a.wins ||
      (ordemCup[a.nome] ?? 999) - (ordemCup[b.nome] ?? 999)
    );
  }

  // ── EQUIPES ──────────────────────────────────────────────────
  function calcTeams(cup) {
    const indices = CONFIG.calendario[cup].map(c => c.pistasIdx);
    const acc = {};

    // Garante que todas as equipes apareçam mesmo sem pontos
    CONFIG.equipes.forEach(eq => {
      acc[eq.nome] = { nome: eq.nome, cor: eq.cor, carro: eq.carro, points: 0, wins: 0 };
    });

    indices.forEach(idx => {
      const pista = CONFIG.pistas[idx];
      if (!pista) return;
      pista.resultados.forEach(r => {
        if (!acc[r.equipe]) return;
        acc[r.equipe].points += r.pontos;
        if (r.pos === 1) acc[r.equipe].wins += 1;
      });
    });

    return Object.values(acc).sort((a, b) =>
      b.points - a.points || b.wins - a.wins || a.nome.localeCompare(b.nome)
    );
  }

  // ── ESTATÍSTICAS GLOBAIS ─────────────────────────────────────
  function calcStats() {
    const wins  = {};
    const poles = {};

    // Vitórias em todas as pistas
    CONFIG.pistas.forEach(pista => {
      pista.resultados.forEach(r => {
        if (r.pos === 1) {
          wins[r.piloto] = (wins[r.piloto] || 0) + 1;
        }
      });
    });

    // Poles em todos os campeonatos
    CONFIG.poles.forEach(p => {
      poles[p.piloto] = (poles[p.piloto] || 0) + 1;
    });

    const toArr = obj =>
      Object.entries(obj)
        .map(([nome, count]) => ({
          nome,
          count,
          foto:   _pilotoMap[nome]?.foto   || "",
          equipe: _pilotoMap[nome]?.equipe || "",
          cor:    _equipeMap[_pilotoMap[nome]?.equipe]?.cor || "#888"
        }))
        .sort((a, b) => b.count - a.count || a.nome.localeCompare(b.nome));

    return { wins: toArr(wins), poles: toArr(poles) };
  }

  // ── CALENDÁRIO COM STATUS ────────────────────────────────────
  function calendarioComStatus(cup) {
    return CONFIG.calendario[cup].map(etapa => {
      const pista = CONFIG.pistas[etapa.pistasIdx];
      const realizado = pista && pista.resultados && pista.resultados.length > 0;
      const vencedor  = realizado ? pista.resultados.find(r => r.pos === 1) : null;
      return {
        ...etapa,
        realizado,
        vencedor: vencedor ? vencedor.piloto : null,
        vencedorEquipe: vencedor ? vencedor.equipe : null
      };
    });
  }

  // ── API PÚBLICA ──────────────────────────────────────────────
  return {
    drivers: {
      ignition:  () => calcDrivers("ignition"),
      evolution: () => calcDrivers("evolution"),
      legacy:    () => calcDrivers("legacy")
    },
    teams: {
      ignition:  () => calcTeams("ignition"),
      evolution: () => calcTeams("evolution"),
      legacy:    () => calcTeams("legacy")
    },
    stats:    () => calcStats(),
    pistas:   () => CONFIG.pistas,
    videos:   () => CONFIG.videos,
    galeria:  () => CONFIG.galeria,
    pilotos:  () => CONFIG.pilotos,
    equipes:  () => CONFIG.equipes,
    piloto:   nome => _pilotoMap[nome],
    equipe:   nome => _equipeMap[nome],
    calendario: cup => calendarioComStatus(cup)
  };

})();