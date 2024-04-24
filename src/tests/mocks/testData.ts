/* eslint-disable max-len */
const mockTestData = {
  count: 5,
  next: 'https://servicodados.ibge.gov.br/api/v3/noticias/?page=2',
  previous: null,
  results: [
    {
      count: 5766,
      page: 1,
      totalPages: 58,
      nextPage: 2,
      previousPage: 0,
      showingFrom: 1,
      showingTo: 100,
      items: [
        {
          id: 39718,
          tipo: 'Notícia',
          titulo: 'Com novidades em seu formato, Relatório de Gestão 2023 é entregue pelo IBGE ao Tribunal de Contas da União',
          introducao: 'O IBGE disponibilizou à sociedade o Relatório de Gestão 2023, após efetuar uma série de mudanças no formato da publicação. O documento é uma exigência do Tribunal de Contas da União (TCU) junto aos órgãos da administração federal, sendo produzido...',
          data_publicacao: '09/04/2024 15:00:00',
          produto_id: 0,
          produtos: '',
          editorias: 'ibge',
          imagens: '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_04\\/RelatorioGestao_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_04\\/RelatorioGestao_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
          produtos_relacionados: '',
          destaque: true,
          link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39718-com-novidades-em-seu-formato-relatorio-de-gestao-2023-e-entregue-pelo-ibge-ao-tribunal-de-contas-da-uniao.html',
        },
        {
          id: 39706,
          tipo: 'Notícia',
          titulo: 'Novo atlas do IBGE traz mapas com o Brasil no centro do mundo',
          introducao: 'O Instituto Brasileiro de Geografia e Estatística – IBGE divulga, nesta terça-feira, dia 09/04, a 9ª edição do Atlas Geográfico Escolar. A nova edição, além de atualizada em seu volume impresso, contará com uma versão digital no portal do Instituto com...',
          data_publicacao: '09/04/2024 11:00:00',
          produto_id: 0,
          produtos: '',
          editorias: 'ibge',
          imagens: '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_04\\/AtlasTHUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_04\\/AtlasHOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
          produtos_relacionados: '',
          destaque: true,
          link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39706-novo-atlas-do-ibge-traz-mapas-com-o-brasil-no-centro-do-mundo.html',
        },
        {
          id: 39696,
          tipo: 'Notícia',
          titulo: 'Produção industrial recua em cinco dos 15 locais pesquisados em fevereiro',
          introducao: 'Comportamento positivo da indústria extrativa impacta na expansão de 71,5% no Rio Grande do Norte, estado com o maior acumulado no ano - Foto: Agência Vale Cinco dos 15 locais investigados pela Pesquisa Indústria Mensal (PIM) Regional recuaram na...',
          data_publicacao: '09/04/2024 09:00:00',
          produto_id: 9296,
          produtos: '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
          editorias: 'economicas',
          imagens: '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_04\\/PIMBR-AgVale-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_04\\/PIMBR-AgVale-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
          produtos_relacionados: '9296',
          destaque: true,
          link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39696-producao-industrial-recua-em-cinco-dos-15-locais-pesquisados-em-fevereiro.html',
        },
        {
          id: 39695,
          tipo: 'Release',
          titulo: 'Em fevereiro, indústria recua em cinco dos 15 locais pesquisados',
          introducao: 'Com variação negativa de 0,3% na indústria nacional em fevereiro, na série com ajuste sazonal, cinco dos 15 locais pesquisados pelo IBGE neste indicador apresentaram taxas negativas. Os maiores recuos foram registrados no Mato Grosso (-3,3%), Goiás...',
          data_publicacao: '09/04/2024 09:00:00',
          produto_id: 9296,
          produtos: '9296|PIM-PF Regional#pimpf2|pesquisa-industrial-mensal-producao-fisica-regional|2209',
          editorias: 'economicas',
          imagens: '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-REGIONAL_Release.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
          produtos_relacionados: '9296',
          destaque: true,
          link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39695-em-fevereiro-industria-recua-em-cinco-dos-15-locais-pesquisados2.html',
        },
        {
          id: 39632,
          tipo: 'Release',
          titulo: 'Produção industrial varia -0,3% em fevereiro',
          introducao: 'Em fevereiro de 2024, a produção industrial nacional variou negativamente 0,3% frente a janeiro, na série com ajuste sazonal. É o segundo recuo consecutivo, com perda acumulada de 1,8%. Fevereiro 2024/ Janeiro 2024  -0,3%  Fevereiro 2024/ Fevereiro 2023 ...',
          data_publicacao: '03/04/2024 09:00:00',
          produto_id: 9294,
          produtos: '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
          editorias: 'economicas',
          imagens: '{"image_intro":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/releases\\/PIM-PF-BR_Release1.png","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
          produtos_relacionados: '9294',
          destaque: true,
          link: 'http://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/39632-producao-industrial-varia-0-3-em-fevereiro.html',
        },
      ],
    },
  ],
};

export default mockTestData;
