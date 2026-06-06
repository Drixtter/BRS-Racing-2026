// ╔══════════════════════════════════════════════════════════════╗
// ║         BRS RACING 2026 — ARQUIVO DE CONFIGURAÇÃO           ║
// ║                                                              ║
// ║  ✅ COMO ATUALIZAR APÓS CADA ETAPA:                         ║
// ║  1. Encontre a pista pelo nome no array CONFIG.pistas        ║
// ║  2. Preencha o array "resultados" com pos, piloto, pontos    ║
// ║  3. Se houve pole, adicione em CONFIG.poles                  ║
// ║  4. Pronto. Pontos e classificações são calculados sozinhos  ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── EQUIPES ────────────────────────────────────────────────────
  // Cadastre uma vez. Nome é a chave usada em todos os outros lugares.
  equipes: [
    { nome: "Red Bull Racing",  cor: "#3671C6", carro: "img/cars/2026redbullracingcarright.avif"  },
    { nome: "Mercedes-AMG",     cor: "#27F4D2", carro: "img/cars/2026mercedescarright.avif"       },
    { nome: "Scuderia Ferrari", cor: "#E8002D", carro: "img/cars/2026ferraricarright.avif"        },
    { nome: "McLaren",          cor: "#FF8000", carro: "img/cars/2026mclarencarright.avif"        },
    { nome: "Aston Martin",     cor: "#229971", carro: "img/cars/2026astonmartincarright.avif"    },
    { nome: "Alpine",           cor: "#FF87BC", carro: "img/cars/2026alpinecarright.avif"         },
    { nome: "Kick Sauber",      cor: "#52E252", carro: "img/cars/2025kicksaubercarright.avif"     },
    { nome: "RB",               cor: "#6692FF", carro: "img/cars/2026racingbullscarright.avif"    },
    { nome: "Williams",         cor: "#64C4FF", carro: "img/cars/2026williamscarright.avif"       },
    { nome: "Haas",             cor: "#B6BABD", carro: "img/cars/2026haasf1teamcarright.avif"     }
  ],

  // ── PILOTOS ────────────────────────────────────────────────────
  // Cadastre uma vez. Nome é a chave usada em todos os outros lugares.
  pilotos: [
    { nome: "Gustavo Guga",              equipe: "Red Bull Racing",  foto: "img/drivers/gustavo.png"    },
    { nome: "João Ferrigno",             equipe: "Red Bull Racing",  foto: "img/drivers/joao.png"       },
    { nome: "Nathan Nadadanad03",        equipe: "Mercedes-AMG",     foto: "img/drivers/nathan.png"     },
    { nome: "Cristian Cris",             equipe: "Mercedes-AMG",     foto: "img/drivers/cristian.png"   },
    { nome: "Julian JuScata",            equipe: "Scuderia Ferrari", foto: "img/drivers/julian.png"     },
    { nome: "Fernando procopiodearruda", equipe: "Scuderia Ferrari", foto: "img/drivers/fernando.png"   },
    { nome: "Adriano Drixtter",          equipe: "McLaren",          foto: "img/drivers/adriano.png"    },
    { nome: "Renato Renato.R2Oliveira",  equipe: "McLaren",          foto: "img/drivers/renato.png"     },
    { nome: "Lucas LucasCarnevali",      equipe: "Williams",         foto: "img/drivers/lucas.png"      },
    { nome: "Diego Dominguesdc13",       equipe: "Williams",         foto: "img/drivers/diego.png"      },
    { nome: "Gabriel Cruz",              equipe: "Haas",             foto: "img/drivers/gabriel.png"    },
    { nome: "Vitor Hugo",                equipe: "Haas",             foto: "img/drivers/vitor.png"      },
    { nome: "Leal Flushh",               equipe: "Kick Sauber",      foto: "img/drivers/leal.png"       },
    { nome: "Frank Violets",             equipe: "Kick Sauber",      foto: "img/drivers/frank.png"      },
    { nome: "Luis Syaazz1",              equipe: "RB",               foto: "img/drivers/luis.png"       },
    { nome: "João Victor",               equipe: "RB",               foto: "img/drivers/joaovictor.png" },
    { nome: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     foto: "img/drivers/rafael.png"     },
    { nome: "Filipi filipialves",        equipe: "Aston Martin",     foto: "img/drivers/filipi.png"     },
    { nome: "Rodrigo Pio197",            equipe: "Alpine",           foto: "img/drivers/pio.png"        },
    { nome: "Fabio",                     equipe: "Alpine",           foto: "img/drivers/fabio.png"      }
  ],

  // ── CAMPEONATOS ────────────────────────────────────────────────
  // Define quais pilotos participam de cada cup e em que ordem aparecem.
  campeonatos: {
    ignition: {
      nome: "Ignition CUP",
      pilotos: [
        "Frank Violets", "Leal Flushh", "Renato Renato.R2Oliveira", "Adriano Drixtter",
        "Nathan Nadadanad03", "Gustavo Guga", "Cristian Cris", "Rafael Rafael94_Sam",
        "João Victor", "João Ferrigno", "Filipi filipialves", "Lucas LucasCarnevali",
        "Julian JuScata", "Fernando procopiodearruda", "Fabio", "Diego Dominguesdc13",
        "Luis Syaazz1", "Gabriel Cruz", "Vitor Hugo", "Rodrigo Pio197"
      ]
    },
    evolution: {
      nome: "Evolution CUP",
      pilotos: [
        "Nathan Nadadanad03", "Cristian Cris", "Renato Renato.R2Oliveira", "Adriano Drixtter",
        "Gustavo Guga", "João Ferrigno", "Julian JuScata", "Fernando procopiodearruda",
        "Rafael Rafael94_Sam", "Filipi filipialves", "Leal Flushh", "Frank Violets",
        "Lucas LucasCarnevali", "Diego Dominguesdc13", "Gabriel Cruz", "Vitor Hugo",
        "Fabio", "Rodrigo Pio197", "Luis Syaazz1", "João Victor"
      ]
    },
    legacy: {
      nome: "Legacy CUP",
      pilotos: [
        "Nathan Nadadanad03", "Cristian Cris", "Renato Renato.R2Oliveira", "Adriano Drixtter",
        "Gustavo Guga", "João Ferrigno", "Julian JuScata", "Fernando procopiodearruda",
        "Rafael Rafael94_Sam", "Filipi filipialves", "Leal Flushh", "Frank Violets",
        "Lucas LucasCarnevali", "Diego Dominguesdc13", "Gabriel Cruz", "Vitor Hugo",
        "Fabio", "Rodrigo Pio197", "Luis Syaazz1", "João Victor"
      ]
    }
  },

  // ── POLES ──────────────────────────────────────────────────────
  // Adicione uma entrada aqui após cada qualifying.
  // "camp" deve ser "ignition", "evolution" ou "legacy"
  poles: [
    { piloto: "Frank Violets",      etapa: "Albert Park",  camp: "ignition" },
    { piloto: "Frank Violets",      etapa: "Shanghai",     camp: "ignition" },
    { piloto: "Frank Violets",      etapa: "Austin",       camp: "ignition" },
    { piloto: "Frank Violets",      etapa: "Suzuka",       camp: "ignition" },
    { piloto: "Frank Violets",      etapa: "Sakhir",       camp: "ignition" },
    { piloto: "Nathan Nadadanad03", etapa: "Jeddah",       camp: "ignition" },
    { piloto: "Gustavo Guga",       etapa: "Las Vegas",    camp: "ignition" },
    { piloto: "João Victor",        etapa: "Miami",        camp: "ignition" }
  ],

  // ── CALENDÁRIO ─────────────────────────────────────────────────
  // "pistasIdx" aponta para o índice correspondente em CONFIG.pistas abaixo.
  // Não altere os índices; apenas atualize as datas se necessário.
  calendario: {
    ignition: [
      { r:  1, track: "Austrália",      date: "Realizado em 08/03", type: "Oficial", pistasIdx: 0  },
      { r:  2, track: "China",          date: "Realizado em 15/03", type: "Oficial", pistasIdx: 1  },
      { r:  3, track: "EUA - Austin",   date: "Realizado em 22/03", type: "Extra",   pistasIdx: 2  },
      { r:  4, track: "Japão",          date: "Realizado em 29/03", type: "Oficial", pistasIdx: 3  },
      { r:  5, track: "Bahrein",        date: "Realizado em 12/04", type: "Oficial", pistasIdx: 4  },
      { r:  6, track: "Arábia Saudita", date: "Realizado em 19/04", type: "Oficial", pistasIdx: 5  },
      { r:  7, track: "Las Vegas",      date: "Realizado em 26/04", type: "Extra",   pistasIdx: 6  },
      { r:  8, track: "Miami",          date: "Realizado em 03/05", type: "Oficial", pistasIdx: 7  },
      { r:  9, track: "Brasil",         date: "Realizado em 10/05", type: "Extra",   pistasIdx: 8  },
      { r: 10, track: "Itália - Monza", date: "Realizado em 17/05", type: "Extra",   pistasIdx: 9  },
      { r: 11, track: "Canadá",         date: "Realizado em 24/05", type: "Oficial", pistasIdx: 10 },
      { r: 12, track: "Mônaco",         date: "31/05",              type: "Oficial", pistasIdx: 11 }
    ],
    evolution: [
      { r:  1, track: "Espanha",        date: "14/06", type: "Oficial", pistasIdx: 12 },
      { r:  2, track: "Japão",          date: "21/06", type: "For fun", pistasIdx: 13 },
      { r:  3, track: "Áustria",        date: "28/06", type: "Oficial", pistasIdx: 14 },
      { r:  4, track: "Grã-Bretanha",   date: "05/07", type: "Oficial", pistasIdx: 15 },
      { r:  5, track: "Itália - Imola", date: "12/07", type: "For fun", pistasIdx: 16 },
      { r:  6, track: "Bélgica",        date: "19/07", type: "Oficial", pistasIdx: 17 },
      { r:  7, track: "Hungria",        date: "26/07", type: "Oficial", pistasIdx: 18 },
      { r:  8, track: "Bahrein",        date: "09/08", type: "For fun", pistasIdx: 19 },
      { r:  9, track: "Países Baixos",  date: "23/08", type: "Oficial", pistasIdx: 20 },
      { r: 10, track: "Canadá",         date: "30/08", type: "For fun", pistasIdx: 21 },
      { r: 11, track: "Itália - Monza", date: "06/09", type: "Oficial", pistasIdx: 22 },
      { r: 12, track: "Brasil",         date: "13/09", type: "Oficial", pistasIdx: 23 }
    ],
    legacy: [
      { r:  1, track: "Azerbaijão",     date: "27/09", type: "Oficial", pistasIdx: 24 },
      { r:  2, track: "Bélgica",        date: "04/10", type: "For fun", pistasIdx: 25 },
      { r:  3, track: "Singapura",      date: "11/10", type: "Oficial", pistasIdx: 26 },
      { r:  4, track: "Áustria",        date: "18/10", type: "For fun", pistasIdx: 27 },
      { r:  5, track: "EUA - Austin",   date: "25/10", type: "Oficial", pistasIdx: 28 },
      { r:  6, track: "México",         date: "01/11", type: "Oficial", pistasIdx: 29 },
      { r:  7, track: "Brasil",         date: "08/11", type: "Oficial", pistasIdx: 30 },
      { r:  8, track: "Arábia Saudita", date: "15/11", type: "For fun", pistasIdx: 31 },
      { r:  9, track: "Las Vegas",      date: "22/11", type: "Oficial", pistasIdx: 32 },
      { r: 10, track: "Qatar",          date: "29/11", type: "Oficial", pistasIdx: 33 },
      { r: 11, track: "Grã-Bretanha",   date: "06/12", type: "For fun", pistasIdx: 34 },
      { r: 12, track: "Abu Dhabi",      date: "13/12", type: "Oficial", pistasIdx: 35 }
    ]
  },

  // ── PISTAS ─────────────────────────────────────────────────────
  // ✅ AQUI É ONDE VOCÊ ATUALIZA APÓS CADA ETAPA.
  // Índices 0–11  → Ignition CUP
  // Índices 12–23 → Evolution CUP
  // Índices 24–35 → Legacy CUP
  //
  // Após cada corrida, encontre a pista e preencha "resultados".
  // Campos por resultado: pos, piloto (igual ao nome em CONFIG.pilotos), pontos
  // O campo "equipe" é opcional, mas ajuda na leitura do arquivo.
  pistas: [

    // ── IGNITION ── índices 0 a 11 ─────────────────────────────

    // [0] Ignition R1
    {
      nome: "Etapa Albert Park - 08/03/2026 21:30h",
      pais: "Austrália",
      imagem: "img/tracks/2026trackmelbournedetailed.avif",
      comprimento: "5.278 km", curvas: 14, drs: 4,
      resultados: [
        { pos:  1, piloto: "Frank Violets",             equipe: "Kick Sauber",      pontos: 30 },
        { pos:  2, piloto: "Leal Flushh",               equipe: "Kick Sauber",      pontos: 25 },
        { pos:  3, piloto: "Filipi filipialves",        equipe: "Aston Martin",     pontos: 21 },
        { pos:  4, piloto: "Julian JuScata",            equipe: "Scuderia Ferrari", pontos: 18 },
        { pos:  5, piloto: "João Ferrigno",             equipe: "Red Bull Racing",  pontos: 16 },
        { pos:  6, piloto: "Adriano Drixtter",          equipe: "McLaren",          pontos: 14 },
        { pos:  7, piloto: "Diego Dominguesdc13",       equipe: "Williams",         pontos: 12 },
        { pos:  8, piloto: "Fabio",                     equipe: "Alpine",           pontos: 10 },
        { pos:  9, piloto: "Cristian Cris",             equipe: "Mercedes-AMG",     pontos:  0 },
        { pos: 10, piloto: "Renato Renato.R2Oliveira",  equipe: "McLaren",          pontos:  0 },
        { pos: 11, piloto: "Nathan Nadadanad03",        equipe: "Mercedes-AMG",     pontos:  0 },
        { pos: 12, piloto: "João Victor",               equipe: "RB",               pontos:  0 },
        { pos: 13, piloto: "Luis Syaazz1",              equipe: "RB",               pontos:  0 },
        { pos: 14, piloto: "Fernando procopiodearruda", equipe: "Scuderia Ferrari", pontos:  0 },
        { pos: 15, piloto: "Lucas LucasCarnevali",      equipe: "Williams",         pontos:  0 },
        { pos: 16, piloto: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     pontos:  0 }
      ]
    },

    // [1] Ignition R2
    {
      nome: "Etapa Shanghai - 15/03/2026 21:30h",
      pais: "China",
      imagem: "img/tracks/2026trackshanghaidetailed.avif",
      comprimento: "5.451 km", curvas: 16, drs: 2,
      resultados: [
        { pos:  1, piloto: "Frank Violets",             equipe: "Kick Sauber",      pontos: 30 },
        { pos:  2, piloto: "Leal Flushh",               equipe: "Kick Sauber",      pontos: 25 },
        { pos:  3, piloto: "Nathan Nadadanad03",        equipe: "Mercedes-AMG",     pontos: 21 },
        { pos:  4, piloto: "João Victor",               equipe: "RB",               pontos: 18 },
        { pos:  5, piloto: "Gustavo Guga",              equipe: "Red Bull Racing",  pontos: 16 },
        { pos:  6, piloto: "Cristian Cris",             equipe: "Mercedes-AMG",     pontos: 14 },
        { pos:  7, piloto: "Renato Renato.R2Oliveira",  equipe: "McLaren",          pontos: 12 },
        { pos:  8, piloto: "Luis Syaazz1",              equipe: "RB",               pontos: 10 },
        { pos:  9, piloto: "Adriano Drixtter",          equipe: "McLaren",          pontos:  7 },
        { pos: 10, piloto: "Fabio",                     equipe: "Alpine",           pontos:  6 },
        { pos: 11, piloto: "Fernando procopiodearruda", equipe: "Scuderia Ferrari", pontos:  5 },
        { pos: 12, piloto: "Lucas LucasCarnevali",      equipe: "Williams",         pontos:  0 },        
        { pos: 13, piloto: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     pontos:  0 },
        { pos: 14, piloto: "Filipi filipialves",        equipe: "Aston Martin",     pontos:  0 },
        { pos: 15, piloto: "João Ferrigno",             equipe: "Red Bull Racing",  pontos:  0 },
        { pos: 16, piloto: "Gabriel Cruz",              equipe: "Haas",             pontos:  0 }
      ]
    },

    // [2] Ignition R3
    {
      nome: "Etapa Austin - 22/03/2026 21:30h",
      pais: "Estados Unidos",
      imagem: "img/tracks/2026trackaustindetailed.avif",
      comprimento: "5.513 km", curvas: 20, drs: 2,
      resultados: [
        { pos:  1, piloto: "Frank Violets",             equipe: "Kick Sauber",      pontos: 30 },
        { pos:  2, piloto: "Renato Renato.R2Oliveira",  equipe: "McLaren",          pontos: 25 },
        { pos:  3, piloto: "Cristian Cris",             equipe: "Mercedes-AMG",     pontos: 21 },
        { pos:  4, piloto: "Leal Flushh",               equipe: "Kick Sauber",      pontos: 18 },
        { pos:  5, piloto: "Gustavo Guga",              equipe: "Red Bull Racing",  pontos: 16 },
        { pos:  6, piloto: "Nathan Nadadanad03",        equipe: "Mercedes-AMG",     pontos: 14 },
        { pos:  7, piloto: "João Ferrigno",             equipe: "Red Bull Racing",  pontos: 12 },
        { pos:  8, piloto: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     pontos: 10 },
        { pos:  9, piloto: "Julian JuScata",            equipe: "Scuderia Ferrari", pontos:  8 },
        { pos: 10, piloto: "Lucas LucasCarnevali",      equipe: "Williams",         pontos:  7 },
        { pos: 11, piloto: "Adriano Drixtter",          equipe: "McLaren",          pontos:  6 },
        { pos: 12, piloto: "Fernando procopiodearruda", equipe: "Scuderia Ferrari", pontos:  5 }
      ]
    },

    // [3] Ignition R4
    {
      nome: "Etapa Suzuka - 29/03/2026 21:30h",
      pais: "Japão",
      imagem: "img/tracks/2026tracksuzukadetailed.avif",
      comprimento: "5.807 km", curvas: 18, drs: 1,
      resultados: [
        { pos:  1, piloto: "Renato Renato.R2Oliveira",  equipe: "McLaren",          pontos: 30 },
        { pos:  2, piloto: "Cristian Cris",             equipe: "Mercedes-AMG",     pontos: 25 },
        { pos:  3, piloto: "Leal Flushh",               equipe: "Kick Sauber",      pontos: 21 },
        { pos:  4, piloto: "Frank Violets",             equipe: "Kick Sauber",      pontos: 18 },
        { pos:  5, piloto: "Adriano Drixtter",          equipe: "McLaren",          pontos: 16 },
        { pos:  6, piloto: "Lucas LucasCarnevali",      equipe: "Williams",         pontos: 14 },
        { pos:  7, piloto: "João Ferrigno",             equipe: "Red Bull Racing",  pontos: 12 },
        { pos:  8, piloto: "Filipi filipialves",        equipe: "Aston Martin",     pontos: 10 },
        { pos:  9, piloto: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     pontos:  8 },
        { pos: 10, piloto: "Nathan Nadadanad03",        equipe: "Mercedes-AMG",     pontos:  0 },
        { pos: 11, piloto: "Gustavo Guga",              equipe: "Red Bull Racing",  pontos:  0 }
      ]
    },

    // [4] Ignition R5
    {
      nome: "Etapa Sakhir - 12/04/2026 21:30h",
      pais: "Bahrein",
      imagem: "img/tracks/Bahrain_Circuit.avif",
      comprimento: "5.412 km", curvas: 15, drs: 2,
      resultados: [
        { pos: 1, piloto: "Frank Violets",            equipe: "Kick Sauber",  pontos: 30 },
        { pos: 2, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG", pontos: 25 },
        { pos: 3, piloto: "Leal Flushh",              equipe: "Kick Sauber",  pontos: 21 },
        { pos: 4, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",      pontos: 18 },
        { pos: 5, piloto: "Adriano Drixtter",         equipe: "McLaren",      pontos: 16 },
        { pos: 6, piloto: "Filipi filipialves",       equipe: "Aston Martin", pontos: 14 },
        { pos: 7, piloto: "Rafael Rafael94_Sam",      equipe: "Aston Martin", pontos: 12 }
      ]
    },

    // [5] Ignition R6
    {
      nome: "Etapa Jeddah - 19/04/2026 21:30h",
      pais: "Arábia Saudita",
      imagem: "img/tracks/2026trackjeddahdetailed.avif",
      comprimento: "6.174 km", curvas: 27, drs: 3,
      resultados: [
        { pos: 1, piloto: "João Victor",               equipe: "RB",               pontos: 30 },
        { pos: 2, piloto: "Cristian Cris",             equipe: "Mercedes-AMG",     pontos: 25 },
        { pos: 3, piloto: "Renato Renato.R2Oliveira",  equipe: "McLaren",          pontos: 21 },
        { pos: 4, piloto: "Gustavo Guga",              equipe: "Red Bull Racing",  pontos: 18 },
        { pos: 5, piloto: "Adriano Drixtter",          equipe: "McLaren",          pontos: 16 },
        { pos: 6, piloto: "Fernando procopiodearruda", equipe: "Scuderia Ferrari", pontos: 14 },
        { pos: 7, piloto: "Rafael Rafael94_Sam",       equipe: "Aston Martin",     pontos: 12 },
        { pos: 8, piloto: "Frank Violets",             equipe: "Kick Sauber",      pontos:  0 },
        { pos: 9, piloto: "Filipi filipialves",        equipe: "Aston Martin",     pontos:  0 }
      ]
    },

    // [6] Ignition R7
    {
      nome: "Etapa Las Vegas - 26/04/2026 21:30h",
      pais: "Estados Unidos",
      imagem: "img/tracks/2026tracklasvegasdetailed.avif",
      comprimento: "6.012 km", curvas: 17, drs: 3,
      resultados: [
        { pos: 1, piloto: "Gustavo Guga",             equipe: "Red Bull Racing", pontos: 30 },
        { pos: 2, piloto: "Leal Flushh",              equipe: "Kick Sauber",     pontos: 25 },
        { pos: 3, piloto: "Cristian Cris",            equipe: "Mercedes-AMG",    pontos: 21 },
        { pos: 4, piloto: "Rafael Rafael94_Sam",      equipe: "Aston Martin",    pontos: 18 },
        { pos: 5, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",         pontos: 16 },
        { pos: 6, piloto: "Adriano Drixtter",         equipe: "McLaren",         pontos:  0 },
        { pos: 7, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG",    pontos:  0 },
        { pos: 8, piloto: "Frank Violets",            equipe: "Kick Sauber",     pontos:  0 }
      ]
    },

    // [7] Ignition R8
    {
      nome: "Etapa Miami - 03/05/2026 21:30h",
      pais: "Estados Unidos",
      imagem: "img/tracks/2026trackmiamidetailed.avif",
      comprimento: "5.041 km", curvas: 19, drs: 2,
      resultados: [
        { pos:  1, piloto: "Frank Violets",            equipe: "Kick Sauber",     pontos: 30 },
        { pos:  2, piloto: "Leal Flushh",              equipe: "Kick Sauber",     pontos: 25 },
        { pos:  3, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",         pontos: 21 },
        { pos:  4, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG",    pontos: 18 },
        { pos:  5, piloto: "Gustavo Guga",             equipe: "Red Bull Racing", pontos: 16 },
        { pos:  6, piloto: "Cristian Cris",            equipe: "Mercedes-AMG",    pontos: 14 },
        { pos:  7, piloto: "Rafael Rafael94_Sam",      equipe: "Aston Martin",    pontos: 12 },
        { pos:  8, piloto: "Adriano Drixtter",         equipe: "McLaren",         pontos: 10 },
        { pos:  9, piloto: "Lucas LucasCarnevali",     equipe: "Williams",        pontos:  8 },
        { pos: 10, piloto: "João Ferrigno",            equipe: "Red Bull Racing", pontos:  7 }
      ]
    },

    // [8] Ignition R9
    {
      nome: "Etapa Interlagos - 10/05/2026 21:30h",
      pais: "Brasil",
      imagem: "img/tracks/2026trackinterlagosdetailed.avif",
      comprimento: "4.309 km", curvas: 15, drs: 2,
      resultados: [
        { pos: 1, piloto: "Frank Violets",            equipe: "Kick Sauber",     pontos: 30 },
        { pos: 2, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG",    pontos: 25 },
        { pos: 3, piloto: "Gustavo Guga",             equipe: "Red Bull Racing", pontos: 21 },
        { pos: 4, piloto: "Leal Flushh",              equipe: "Kick Sauber",     pontos: 18 },
        { pos: 5, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",         pontos: 16 },
        { pos: 6, piloto: "Adriano Drixtter",         equipe: "McLaren",         pontos: 14 },
        { pos: 7, piloto: "Rafael Rafael94_Sam",      equipe: "Aston Martin",    pontos: 12 },
        { pos: 8, piloto: "João Ferrigno",            equipe: "Red Bull Racing", pontos:  0 }
      ]
    },

    // [9] Ignition R10
    {
      nome: "Etapa Monza - 17/05/2026 21:30h",
      pais: "Itália",
      imagem: "img/tracks/2026trackmonzadetailed.avif",
      comprimento: "5.793 km", curvas: 11, drs: 3,
      resultados: [
        { pos: 1, piloto: "Frank Violets",            equipe: "Kick Sauber",  pontos: 30 },
        { pos: 2, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",      pontos: 25 },
        { pos: 3, piloto: "Adriano Drixtter",         equipe: "McLaren",      pontos: 21 },
        { pos: 4, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG", pontos:  0 },
        { pos: 5, piloto: "Leal Flushh",              equipe: "Kick Sauber",  pontos:  0 }
      ]
    },

    // [10] Ignition R11
    {
      nome: "Etapa Montreal - 24/05/2026 21:30h",
      pais: "Canadá",
      imagem: "img/tracks/2026trackmontrealdetailed.avif",
      comprimento: "4.361 km", curvas: 14, drs: 2,
      resultados: [
        { pos: 1, piloto: "Frank Violets",            equipe: "Kick Sauber",  pontos: 30 },
        { pos: 2, piloto: "Leal Flushh",              equipe: "Kick Sauber",  pontos: 25 },
        { pos: 3, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",      pontos: 21 },
        { pos: 4, piloto: "Adriano Drixtter",         equipe: "McLaren",      pontos: 18 },
        { pos: 5, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG", pontos: 16 },
        { pos: 6, piloto: "Rafael Rafael94_Sam",      equipe: "Aston Martin", pontos:  0 }
      ]
    },

    // [11] Ignition R12
    {
      nome: "Etapa Monte Carlo - 31/05/2026 21:30h",
      pais: "Mônaco",
      imagem: "img/tracks/2026trackmontecarlodetailed.avif",
      comprimento: "3.337 km", curvas: 19, drs: 1,
      resultados: [
        { pos: 1, piloto: "Frank Violets",            equipe: "Kick Sauber",  pontos: 30 },
        { pos: 2, piloto: "Nathan Nadadanad03",       equipe: "Mercedes-AMG", pontos: 25 },        
        { pos: 3, piloto: "Leal Flushh",              equipe: "Kick Sauber",  pontos: 21 },
        { pos: 4, piloto: "Adriano Drixtter",         equipe: "McLaren",      pontos: 18 },
        { pos: 5, piloto: "Renato Renato.R2Oliveira", equipe: "McLaren",      pontos:  0 }     
      ]
      // ✅ Preencha após a corrida
    },

    // ── EVOLUTION ── índices 12 a 23 ───────────────────────────

    // [12] Evolution R1
    {
      nome: "Etapa Barcelona - 14/06/2026 21:30h",
      pais: "Espanha",
      imagem: "img/tracks/2026trackcatalunyadetailed.avif",
      comprimento: "4.657 km", curvas: 16, drs: 2,
      resultados: []
    },

    // [13] Evolution R2
    {
      nome: "Etapa Suzuka - 21/06/2026 21:30h",
      pais: "Japão",
      imagem: "img/tracks/2026tracksuzukadetailed.avif",
      comprimento: "5.807 km", curvas: 18, drs: 1,
      resultados: []
    },

    // [14] Evolution R3
    {
      nome: "Etapa Red Bull Ring - 28/06/2026 21:30h",
      pais: "Áustria",
      imagem: "img/tracks/2026trackspielbergdetailed.avif",
      comprimento: "4.318 km", curvas: 10, drs: 3,
      resultados: []
    },

    // [15] Evolution R4
    {
      nome: "Etapa Silverstone - 05/07/2026 21:30h",
      pais: "Grã-Bretanha",
      imagem: "img/tracks/2026tracksilverstonedetailed.avif",
      comprimento: "5.891 km", curvas: 18, drs: 2,
      resultados: []
    },

    // [16] Evolution R5
    {
      nome: "Etapa Imola - 12/07/2026 21:30h",
      pais: "Itália",
      imagem: "img/tracks/Emilia_Romagna_Circuit.avif",
      comprimento: "4.909 km", curvas: 19, drs: 1,
      resultados: []
    },

    // [17] Evolution R6
    {
      nome: "Etapa Spa - 19/07/2026 21:30h",
      pais: "Bélgica",
      imagem: "img/tracks/2026trackspafrancorchampsdetailed.avif",
      comprimento: "7.004 km", curvas: 19, drs: 3,
      resultados: []
    },

    // [18] Evolution R7
    {
      nome: "Etapa Hungaroring - 26/07/2026 21:30h",
      pais: "Hungria",
      imagem: "img/tracks/2026trackhungaroringdetailed.avif",
      comprimento: "4.381 km", curvas: 14, drs: 2,
      resultados: []
    },

    // [19] Evolution R8
    {
      nome: "Etapa Sakhir - 09/08/2026 21:30h",
      pais: "Bahrein",
      imagem: "img/tracks/Bahrain_Circuit.avif",
      comprimento: "5.412 km", curvas: 15, drs: 2,
      resultados: []
    },

    // [20] Evolution R9
    {
      nome: "Etapa Zandvoort - 23/08/2026 21:30h",
      pais: "Holanda",
      imagem: "img/tracks/2026trackzandvoortdetailed.avif",
      comprimento: "4.226 km", curvas: 14, drs: 2,
      resultados: []
    },

    // [21] Evolution R10
    {
      nome: "Etapa Montreal - 30/08/2026 21:30h",
      pais: "Canadá",
      imagem: "img/tracks/2026trackmontrealdetailed.avif",
      comprimento: "4.361 km", curvas: 13, drs: 3,
      resultados: []
    },

    // [22] Evolution R11
    {
      nome: "Etapa Monza - 06/09/2026 21:30h",
      pais: "Itália",
      imagem: "img/tracks/2026trackmonzadetailed.avif",
      comprimento: "5.793 km", curvas: 11, drs: 3,
      resultados: []
    },

    // [23] Evolution R12
    {
      nome: "Etapa Interlagos - 13/09/2026 21:30h",
      pais: "Brasil",
      imagem: "img/tracks/2026trackinterlagosdetailed.avif",
      comprimento: "4.309 km", curvas: 15, drs: 2,
      resultados: []
    },

    // ── LEGACY ── índices 24 a 35 ──────────────────────────────

    // [24] Legacy R1
    {
      nome: "Etapa Baku - 27/09/2026 21:30h",
      pais: "Azerbaijão",
      imagem: "img/tracks/2026trackbakudetailed.avif",
      comprimento: "6.003 km", curvas: 20, drs: 2,
      resultados: []
    },

    // [25] Legacy R2
    {
      nome: "Etapa Spa - 04/10/2026 21:30h",
      pais: "Bélgica",
      imagem: "img/tracks/2026trackspafrancorchampsdetailed.avif",
      comprimento: "7.004 km", curvas: 19, drs: 2,
      resultados: []
    },

    // [26] Legacy R3
    {
      nome: "Etapa Marina Bay - 11/10/2026 21:30h",
      pais: "Singapura",
      imagem: "img/tracks/2026tracksingaporedetailed.avif",
      comprimento: "5.513 km", curvas: 20, drs: 2,
      resultados: []
    },

    // [27] Legacy R4
    {
      nome: "Etapa Red Bull Ring - 18/10/2026 21:30h",
      pais: "Áustria",
      imagem: "img/tracks/2026trackspielbergdetailed.avif",
      comprimento: "4.318 km", curvas: 10, drs: 3,
      resultados: []
    },

    // [28] Legacy R5
    {
      nome: "Etapa Austin - 25/10/2026 21:30h",
      pais: "Estados Unidos",
      imagem: "img/tracks/2026trackaustindetailed.avif",
      comprimento: "5.513 km", curvas: 20, drs: 2,
      resultados: []
    },

    // [29] Legacy R6
    {
      nome: "Etapa Cidade do México - 01/11/2026 21:30h",
      pais: "México",
      imagem: "img/tracks/2026trackmexicocitydetailed.avif",
      comprimento: "4.304 km", curvas: 17, drs: 3,
      resultados: []
    },

    // [30] Legacy R7
    {
      nome: "Etapa Interlagos - 08/11/2026 21:30h",
      pais: "Brasil",
      imagem: "img/tracks/2026trackinterlagosdetailed.avif",
      comprimento: "4.309 km", curvas: 15, drs: 2,
      resultados: []
    },

    // [31] Legacy R8
    {
      nome: "Etapa Jeddah - 15/11/2026 21:30h",
      pais: "Arábia Saudita",
      imagem: "img/tracks/2026trackjeddahdetailed.avif",
      comprimento: "6.174 km", curvas: 27, drs: 3,
      resultados: []
    },

    // [32] Legacy R9
    {
      nome: "Etapa Las Vegas - 22/11/2026 21:30h",
      pais: "Estados Unidos",
      imagem: "img/tracks/2026tracklasvegasdetailed.avif",
      comprimento: "6.202 km", curvas: 17, drs: 3,
      resultados: []
    },

    // [33] Legacy R10
    {
      nome: "Etapa Losail - 29/11/2026 21:30h",
      pais: "Qatar",
      imagem: "img/tracks/2026tracklusaildetailed.avif",
      comprimento: "5.419 km", curvas: 16, drs: 1,
      resultados: []
    },

    // [34] Legacy R11
    {
      nome: "Etapa Silverstone - 06/12/2026 21:30h",
      pais: "Grã-Bretanha",
      imagem: "img/tracks/2026tracksilverstonedetailed.avif",
      comprimento: "5.891 km", curvas: 18, drs: 2,
      resultados: []
    },

    // [35] Legacy R12
    {
      nome: "Etapa Yas Marina - 13/12/2026 21:30h",
      pais: "Abu Dhabi",
      imagem: "img/tracks/2026trackyasmarinacircuitdetailed.avif",
      comprimento: "5.554 km", curvas: 16, drs: 2,
      resultados: []
    }

  ],

  // ── VÍDEOS ─────────────────────────────────────────────────────
  // Adicione o youtubeId (parte final da URL do YouTube).
  videos: [
    { titulo: "Ignition - Brasil 2026",               data: "10/05/2026", youtubeId: "IGTqHoMJuRE"       },
    { titulo: "Ignition - Arábia Saudita 2026",       data: "19/04/2026", youtubeId: "R25Ag7FW7BE?t=5614s" },
    { titulo: "Pré-temporada 2026 - Drixtter X Guga", data: "09/02/2026", youtubeId: "s5EN-WnPhIg"        },
    { titulo: "GP de Interlagos - Melhores Momentos", data: "20/01/2026", youtubeId: "L2Wg9yx7lsk"        }
  ],

  // ── GALERIA ────────────────────────────────────────────────────
  galeria: [
    { titulo: "RB Team",                     data: "Fev/2026", url: "img/galeria/RB_Team.png"                    },
    { titulo: "Chefe - Estratégia alinhada", data: "Fev/2026", url: "img/galeria/McLaren_Team_01.png"            },
    { titulo: "Troféus 2026",                data: "Fev/2026", url: "img/galeria/cups.png"                       },
    { titulo: "Alpine Team",                 data: "Fev/2026", url: "img/galeria/Alpine_Team.png"                },
    { titulo: "Haas Team",                   data: "Fev/2026", url: "img/galeria/Haas_Team.png"                  },
    { titulo: "Williams Team",               data: "Fev/2026", url: "img/galeria/Williams_Team.png"              },
    { titulo: "Aston Martin Team",           data: "Fev/2026", url: "img/galeria/Aston_Team.png"                 },
    { titulo: "Mercedes Team",               data: "Fev/2026", url: "img/galeria/Mercedes_Team.png"              },
    { titulo: "Ferrari Team",                data: "Fev/2026", url: "img/galeria/Ferrari_Team.png"               },
    { titulo: "McLaren Team",                data: "Fev/2026", url: "img/galeria/McLaren_Team.png"               },
    { titulo: "Red Bull Team",               data: "Fev/2026", url: "img/galeria/Red_Bull_Team.png"              },
    { titulo: "Sauber Team",                 data: "Fev/2026", url: "img/galeria/Sauber_Team.png"                },
    { titulo: "Largada da pré-temporada",    data: "Fev/2026", url: "img/galeria/F1_25_photo_20260216_075812.png"}
  ]

};