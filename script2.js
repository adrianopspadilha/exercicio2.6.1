const paises = [
    {
      pais: 'br',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [
            {
              nome: 'felipe',
              esporte: 'volei',
            },
          ],
        },
        {
          tipo: 'prata',
          ganhadores: [
            {
              nome: 'mathias',
              esporte: 'atletismo',
            },
          ],
        },
        {
          tipo: 'bronze',
          ganhadores: [
            {
              nome: 'michael',
              esporte: 'futebol',
            },
          ],
        },
      ],
    },
    {
      pais: 'eua',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [
            {
              nome: 'felipe',
              esporte: 'basquete',
            },
          ],
        },
        {
          tipo: 'prata',
          ganhadores: [],
        },
        {
          tipo: 'bronze',
          ganhadores: [],
        },
      ],
    },
    {
      pais: 'nova zelandia',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [],
        },
        {
          tipo: 'prata',
          ganhadores: [],
        },
        {
          tipo: 'bronze',
          ganhadores: [],
        },
      ],
    },
  ];

  const paisesComMedalhas = paises.filter(pais => {
    const medalhas = pais.medalhas;
    const ganhouAlgumaMedalha = medalhas.some(medalha => medalha.ganhadores.lenght > 0);
    return ganhouAlgumaMedalha;
  });

  const qtdMedalhas = paises.map(pais => {
    const medalhas = quantidade.medalhas;
    return {
        id,
        nome,
        excluido: excluido ? false : true,
    };
  });



  console.log(JSON.stringify(paises, undefined, 1));