# BRS Racing 2026 — Guia de Instalação

Siga este guia para configurar o projeto em uma nova máquina Windows.

---

## 1. Pré-requisitos

Instale os programas abaixo (apenas uma vez por máquina):

### Node.js
1. Acesse https://nodejs.org
2. Baixe a versão **LTS** (botão verde)
3. Execute o instalador e clique em **Next** em tudo
4. Para verificar: abra o PowerShell e digite:
   ```
   node -v
   npm -v
   ```
   Deve aparecer algo como `v20.x.x` e `10.x.x`

### Git
1. Acesse https://git-scm.com/download/win
2. Baixe e instale (pode deixar todas as opções padrão)
3. Para verificar:
   ```
   git -v
   ```
   Deve aparecer algo como `git version 2.x.x`

---

## 2. Clonar o repositório

Abra o **PowerShell** ou o **Terminal** e execute:

```powershell
git clone https://github.com/SEU_USUARIO/BRS-Racing-2026.git
cd BRS-Racing-2026
```

> Substitua `SEU_USUARIO` pelo usuário correto do GitHub.

---

## 3. Instalar o painel Admin

```powershell
cd admin
npm install
```

Aguarde a instalação terminar (aparecerá "added X packages").

---

## 4. Configurar a senha do admin (opcional)

A senha padrão é **`brs2026`**.

Para usar uma senha personalizada, crie o arquivo `admin\.env`:

```
ADMIN_PASSWORD=minhasenha123
```

> **Atenção:** o arquivo `.env` já está no `.gitignore` — ele **não será enviado ao GitHub**.

---

## 5. Iniciar o painel Admin

```powershell
cd admin
npm start
```

Abra o navegador em: **http://localhost:4000**

---

## 6. Visualizar o site localmente (opcional)

Para ver o site BRS Racing no navegador sem publicar:

```powershell
# Na raiz do projeto (não dentro de admin/)
npx serve -p 3001 .
```

Acesse: **http://localhost:3001**

---

## 7. Configurar o Git para publicar no GitHub

Só é necessário fazer isso uma vez por máquina.

### 7.1 — Identificação
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 7.2 — Autenticação com o GitHub

A forma mais simples é usar o **GitHub CLI**:

1. Acesse https://cli.github.com e instale
2. Execute:
   ```
   gh auth login
   ```
3. Escolha: **GitHub.com → HTTPS → Login with a web browser**
4. Siga as instruções na tela

Após isso, o botão **🚀 Publicar** no painel admin funcionará normalmente.

---

## Uso no dia a dia

| O que fazer | Como fazer |
|---|---|
| Abrir o painel admin | `cd admin && npm start` → http://localhost:4000 |
| Lançar resultado de corrida | Aba **🏁 Resultado** no painel |
| Publicar no site | Aba **🚀 Publicar** no painel |
| Ver o site localmente | `npx serve -p 3001 .` → http://localhost:3001 |

---

## Solução de problemas

**"npm não é reconhecido"**
→ Node.js não foi instalado corretamente. Reinstale e reinicie o PowerShell.

**"git não é reconhecido"**
→ Git não foi instalado. Siga o passo 1.

**Erro ao publicar: "remote: Permission denied"**
→ A autenticação com o GitHub não está configurada. Refaça o passo 7.2.

**Porta 4000 em uso**
→ Execute `npx kill-port 4000` ou reinicie o computador.
