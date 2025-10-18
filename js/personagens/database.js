const databasePersonagens = [
    // RUÍNAS
    {
        nome: "Boboneco",
        statics: { at: 0, def: 0 },
        formaPacifista: "Em agir apenas aperte em conversar.",
        local: "Ruinas",
        img: "img/personagens/personagem (1).png"
    },
    {
        nome: "Froggit",
        statics: { at: 4, def: 5 },
        formaPacifista: "Em agir aperte em Elogiar.",
        local: "Ruinas",
        img: "img/personagens/personagem (2).png"
    },
    {
        nome: "Whimsun",
        statics: { at: 5, def: 0 },
        formaPacifista: "Apenas aperte em piedade.",
        local: "Ruinas",
        img: "img/personagens/personagem (3).png"
    },
    {
        nome: "Moldnorr",
        statics: { at: 6, def: 0 },
        formaPacifista: "Apenas aperte em piedade.",
        local: "Ruinas",
        img: "img/personagens/personagem (4).png"
    },
    {
        nome: "Napstablook",
        statics: { at: 10, def: 10 },
        formaPacifista: "Em agir aperte em animar.",
        local: "Ruinas",
        img: "img/personagens/personagem (5).png"
    },
    {
        nome: "Migops",
        statics: { at: 7, def: 5 },
        formaPacifista: "Apenas aperte em piedade.",
        local: "Ruinas",
        img: "img/personagens/personagem (6).png"
    },
    {
        nome: "Vegetóide",
        statics: { at: 6, def: 6 },
        formaPacifista: "Em agir aperte em jantar, pegue o vegetal verde e depois devorar ou piedade.",
        local: "Ruinas",
        img: "img/personagens/personagem (7).png"
    },
    {
        nome: "Loox",
        statics: { at: 6, def: 6 },
        formaPacifista: "Em agir escolha 'não pega no pé' e depois piedade.",
        local: "Ruinas",
        img: "img/personagens/personagem (8).png"
    },

    // NEVADA
    {
        nome: "Snowdrake",
        statics: { at: 12, def: 7 },
        formaPacifista: "Em agir aperte em rir, e depois em piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (9).png"
    },
    {
        nome: "Ice Cap",
        statics: { at: 11, def: 4 },
        formaPacifista: "Em agir aperte ignorar duas vezes e depois piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (10).png"
    },
    {
        nome: "Dogues (Dogamy e Dogaressa)",
        statics: { at: 14, def: 5 },
        formaPacifista: "Rolar, re-cheirar, acariciar ambos e depois piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (11).png"
    },
    {
        nome: "Gyftrot",
        statics: { at: 16, def: 8 },
        formaPacifista: "Aperte em desdecorar 3 vezes e depois piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (12).png"
    },
    {
        nome: "Glyde",
        statics: { at: "alto", def: "alta" },
        formaPacifista: "Em agir aperte em nada 3 vezes, depois piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (13).png"
    },
    {
        nome: "Dogão",
        statics: { at: 15, def: 8 },
        formaPacifista: "Em agir: chamar → acariciar → brincar → acariciar 3 vezes → piedade.",
        local: "Nevada",
        img: "img/personagens/personagem (14).png"
    },

    // CACHOEIRA
    {
        nome: "Anron",
        statics: { at: 24, def: 12 },
        formaPacifista: "Em agir, flexionar 3 vezes.",
        local: "Cachoeira",
        img: "img/personagens/personagem (15).png"
    },
    {
        nome: "Lavaro",
        statics: { at: 18, def: 5 },
        formaPacifista: "Em agir, lavar e depois piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (16).png"
    },
    {
        nome: "Shyrena",
        statics: { at: 19, def: 0 },
        formaPacifista: "Aperte em cantar e depois piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (17).png"
    },
    {
        nome: "Temmie",
        statics: { at: "tema?", def: "tema?" },
        formaPacifista: "Primeira: falar e piedade. Segunda: flexionar e iniciar uma nova luta.",
        local: "Cachoeira",
        img: "img/personagens/personagem (18).png"
    },
    {
        nome: "Impostor Moldnorr",
        statics: { at: 6, def: 0 },
        formaPacifista: "Em agir, imitar → desabraçar → piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (19).png"
    },

    // TERÁQUENTE
    {
        nome: "Vulkin",
        statics: { at: 25, def: 0 },
        formaPacifista: "Em agir, abrace-o e depois piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (20).png"
    },
    {
        nome: "Tsundervião",
        statics: { at: 25, def: 26 },
        formaPacifista: "Em agir, aproxime-se, encoste no verde e depois piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (21).png"
    },
    {
        nome: "Pyrope",
        statics: { at: 29, def: 14 },
        formaPacifista: "Em agir, esquentar 2 vezes e depois piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (22).png"
    },
    {
        nome: "Guardas Reais",
        statics: { at: "30-39", def: 20 },
        formaPacifista: "No RG 02: polir armadura → RG 01: sussurrar → piedade.",
        local: "Cachoeira",
        img: "img/personagens/personagem (23).png"
    },

    // HOTEL
    {
        nome: "Madjicko",
        statics: { at: 29, def: 24 },
        formaPacifista: "Em agir, falar e depois piedade.",
        local: "Hotel",
        img: "img/personagens/personagem (24).png"
    },
    {
        nome: "Knight Knight",
        statics: { at: 36, def: 36 },
        formaPacifista: "Em agir, cantar 2 vezes e depois piedade.",
        local: "Hotel",
        img: "img/personagens/personagem (25).png"
    },
    {
        nome: "Whimsalot",
        statics: { at: 34, def: 12 },
        formaPacifista: "Em agir, rezar e depois piedade.",
        local: "Hotel",
        img: "img/personagens/personagem (26).png"
    },
    {
        nome: "Final Froggit",
        statics: { at: 30, def: 24 },
        formaPacifista: "Em agir, mistificar e depois piedade.",
        local: "Hotel",
        img: "img/personagens/personagem (27).png"
    },
    {
        nome: "Astigmatismo",
        statics: { at: 32, def: 26 },
        formaPacifista: "Em agir, pegar no pé e depois piedade.",
        local: "Hotel",
        img: "img/personagens/personagem (28).png"
    },
    //Laboratorio
    {
        nome: "Memoryhead",
        statics: { at: "?", def: "?" },
        formaPacifista: "Usar o celular → recusar → ir embora.",
        local: "??????",
        img: "img/personagens/censurado.png"
    },
    {
        nome: "Amálgamo",
        statics: { at: "?", def: "?" },
        formaPacifista: "Chamar → acariciar → brincar → acariciar 2x → sair.",
        local: "??????",
        img: "img/personagens/censurado.png"
    },
    {
        nome: "Pão de Limão",
        statics: { at: "?", def: "?" },
        formaPacifista: "Cantar → flexionar → desabraçar (qualquer ordem).",
        local: "??????",
        img: "img/personagens/censurado.png"
    },
    {
        nome: "Amálgano :(",
        statics: { at: "?", def: "?" },
        formaPacifista: "Aperte em piada 3 vezes.",
        local: "??????",
        img: "img/personagens/censurado.png"
    },
    {
        nome: ",",
        statics: { at: ",", def: "," },
        formaPacifista: "mistificar → rezar → pegar no pé(qualquer ordem)",
        local: "??????",
        img: "img/personagens/censurado.png"  
    }
];