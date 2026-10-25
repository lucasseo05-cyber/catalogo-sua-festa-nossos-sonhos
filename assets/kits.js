/* ============================================================
   CATÁLOGO — Sua Festa, Nossos Sonhos
   Este é o único arquivo que precisa mudar para atualizar o catálogo.

   ADICIONAR UM KIT:
     1. Coloque a foto em assets/img/kits/  (JPG ~900px de largura, ex.: cas-61.jpg)
     2. Copie uma linha { ... } dentro da categoria certa e preencha:
        - codigo:  aparece na foto e vai na mensagem do WhatsApp (ex.: CAS-61)
        - nome:    nome do kit
        - tipo:    (só nas categorias com filtro) um dos "id" da lista filtros
        - fotos:   lista de arquivos; a primeira é a capa. Pode ter mais de uma.
   TIRAR UM KIT: apague a linha dele.
   CAPA DO CARD NA PÁGINA CENTRAL: por padrão é a foto do 1º kit; para escolher outra,
   preencha "capa" com o caminho (ex.: 'assets/img/kits/cas-12.jpg').

   LINKS PARA MANDAR NO WHATSAPP:
     página do evento ....... https://SEU-DOMINIO/casamento/
     já filtrada ............ https://SEU-DOMINIO/cha-de-bebe/?tipo=revelacao
     um kit específico ...... https://SEU-DOMINIO/cha-de-bebe/?kit=BEB-19
   ============================================================ */

window.CATALOGO = {
  whatsapp: '5511949156564',
  instagram: 'https://www.instagram.com/suafestanossossonhos',
  cidade: 'São Caetano do Sul · ABC',

  // Fotos da capa (topo da página central). Para trocar, coloque a foto em assets/img/hero/.
  capaHero: [
    { foto: 'assets/img/hero/hero-1.jpg', alt: 'Kit de casamento com arco floral e cortina de luzes' }, // centro
    { foto: 'assets/img/hero/hero-2.jpg', alt: 'Kit de chá de bebê Oh Baby com urso' },              // esquerda
    { foto: 'assets/img/hero/hero-3.jpg', alt: 'Kit de aniversário verde e dourado' }                  // direita
  ],

  categorias: [
    {
      slug: 'casamento', nome: 'Casamento', emoji: '💍',
      capa: '',
      kits: [
        { codigo: 'CAS-01', nome: 'Casamento 01', fotos: ['cas-01.jpg'] },
        { codigo: 'CAS-02', nome: 'Casamento 02', fotos: ['cas-02.jpg'] },
        { codigo: 'CAS-03', nome: 'Casamento 03', fotos: ['cas-03.jpg'] },
        { codigo: 'CAS-04', nome: 'Casamento 04', fotos: ['cas-04.jpg'] },
        { codigo: 'CAS-05', nome: 'Casamento 05', fotos: ['cas-05.jpg'] },
        { codigo: 'CAS-06', nome: 'Casamento 06', fotos: ['cas-06.jpg'] },
        { codigo: 'CAS-07', nome: 'Casamento 07', fotos: ['cas-07.jpg'] },
        { codigo: 'CAS-08', nome: 'Casamento 08', fotos: ['cas-08.jpg'] },
        { codigo: 'CAS-09', nome: 'Casamento 09', fotos: ['cas-09.jpg'] },
        { codigo: 'CAS-10', nome: 'Casamento 10', fotos: ['cas-10.jpg'] },
        { codigo: 'CAS-11', nome: 'Casamento 11', fotos: ['cas-11.jpg'] },
        { codigo: 'CAS-12', nome: 'Casamento 12', fotos: ['cas-12.jpg'] },
        { codigo: 'CAS-13', nome: 'Casamento 13', fotos: ['cas-13.jpg'] },
        { codigo: 'CAS-14', nome: 'Casamento 14', fotos: ['cas-14.jpg'] },
        { codigo: 'CAS-15', nome: 'Casamento 15', fotos: ['cas-15.jpg'] },
        { codigo: 'CAS-16', nome: 'Casamento 16', fotos: ['cas-16.jpg'] },
        { codigo: 'CAS-17', nome: 'Casamento 17', fotos: ['cas-17.jpg'] },
        { codigo: 'CAS-18', nome: 'Casamento 18', fotos: ['cas-18.jpg'] },
        { codigo: 'CAS-19', nome: 'Casamento 19', fotos: ['cas-19.jpg'] },
        { codigo: 'CAS-20', nome: 'Casamento 20', fotos: ['cas-20.jpg'] },
        { codigo: 'CAS-21', nome: 'Casamento 21', fotos: ['cas-21.jpg'] },
        { codigo: 'CAS-22', nome: 'Casamento 22', fotos: ['cas-22.jpg'] },
        { codigo: 'CAS-23', nome: 'Casamento 23', fotos: ['cas-23.jpg'] },
        { codigo: 'CAS-24', nome: 'Casamento 24', fotos: ['cas-24.jpg'] },
        { codigo: 'CAS-25', nome: 'Casamento 25', fotos: ['cas-25.jpg'] },
        { codigo: 'CAS-26', nome: 'Casamento 26', fotos: ['cas-26.jpg'] },
        { codigo: 'CAS-27', nome: 'Casamento 27', fotos: ['cas-27.jpg'] },
        { codigo: 'CAS-28', nome: 'Casamento 28', fotos: ['cas-28.jpg'] },
        { codigo: 'CAS-29', nome: 'Casamento 29', fotos: ['cas-29.jpg'] },
        { codigo: 'CAS-30', nome: 'Casamento 30', fotos: ['cas-30.jpg'] },
        { codigo: 'CAS-31', nome: 'Casamento 31', fotos: ['cas-31.jpg'] },
        { codigo: 'CAS-32', nome: 'Casamento 32', fotos: ['cas-32.jpg'] },
        { codigo: 'CAS-33', nome: 'Casamento 33', fotos: ['cas-33.jpg'] },
        { codigo: 'CAS-34', nome: 'Casamento 34', fotos: ['cas-34.jpg'] },
        { codigo: 'CAS-35', nome: 'Casamento 35', fotos: ['cas-35.jpg'] },
        { codigo: 'CAS-36', nome: 'Casamento 36', fotos: ['cas-36.jpg'] },
        { codigo: 'CAS-37', nome: 'Casamento 37', fotos: ['cas-37.jpg'] },
        { codigo: 'CAS-38', nome: 'Casamento 38', fotos: ['cas-38.jpg'] },
        { codigo: 'CAS-39', nome: 'Casamento 39', fotos: ['cas-39.jpg'] },
        { codigo: 'CAS-40', nome: 'Casamento 40', fotos: ['cas-40.jpg'] },
        { codigo: 'CAS-41', nome: 'Casamento 41', fotos: ['cas-41.jpg'] },
        { codigo: 'CAS-42', nome: 'Casamento 42', fotos: ['cas-42.jpg'] },
        { codigo: 'CAS-43', nome: 'Casamento 43', fotos: ['cas-43.jpg'] },
        { codigo: 'CAS-44', nome: 'Casamento 44', fotos: ['cas-44.jpg'] },
        { codigo: 'CAS-45', nome: 'Casamento 45', fotos: ['cas-45.jpg'] },
        { codigo: 'CAS-46', nome: 'Casamento 46', fotos: ['cas-46.jpg'] },
        { codigo: 'CAS-47', nome: 'Casamento 47', fotos: ['cas-47.jpg'] },
        { codigo: 'CAS-48', nome: 'Casamento 48', fotos: ['cas-48.jpg'] },
        { codigo: 'CAS-49', nome: 'Casamento 49', fotos: ['cas-49.jpg'] },
        { codigo: 'CAS-50', nome: 'Casamento 50', fotos: ['cas-50.jpg'] },
        { codigo: 'CAS-51', nome: 'Casamento 51', fotos: ['cas-51.jpg'] },
        { codigo: 'CAS-52', nome: 'Casamento 52', fotos: ['cas-52.jpg'] },
        { codigo: 'CAS-53', nome: 'Casamento 53', fotos: ['cas-53.jpg'] },
        { codigo: 'CAS-54', nome: 'Casamento 54', fotos: ['cas-54.jpg'] },
        { codigo: 'CAS-55', nome: 'Casamento 55', fotos: ['cas-55.jpg'] },
        { codigo: 'CAS-56', nome: 'Casamento 56', fotos: ['cas-56.jpg'] },
        { codigo: 'CAS-57', nome: 'Casamento 57', fotos: ['cas-57.jpg'] },
        { codigo: 'CAS-58', nome: 'Casamento 58', fotos: ['cas-58.jpg'] },
        { codigo: 'CAS-59', nome: 'Casamento 59', fotos: ['cas-59.jpg'] },
        { codigo: 'CAS-60', nome: 'Casamento 60', fotos: ['cas-60.jpg'] }
      ]
    },
    {
      slug: 'cha-de-bebe', nome: 'Chá de Bebê & Revelação', emoji: '🍼',
      capa: '',
      filtros: [ { id: 'bebe', nome: 'Chá de bebê' }, { id: 'revelacao', nome: 'Chá revelação' } ],
      kits: [
        { codigo: 'BEB-01', nome: 'Ursinhos rosé Oh Baby', tipo: 'bebe', fotos: ['beb-01.jpg'] },
        { codigo: 'BEB-02', nome: 'Azul turquesa', tipo: 'bebe', fotos: ['beb-02.jpg'] },
        { codigo: 'BEB-03', nome: 'Ursinhos neutro', tipo: 'bebe', fotos: ['beb-03.jpg'] },
        { codigo: 'BEB-04', nome: 'Arco rosa marrom', tipo: 'bebe', fotos: ['beb-04.jpg'] },
        { codigo: 'BEB-05', nome: 'Arco pastel ursinho', tipo: 'bebe', fotos: ['beb-05.jpg'] },
        { codigo: 'BEB-06', nome: 'Roxo Oh Baby', tipo: 'bebe', fotos: ['beb-06.jpg'] },
        { codigo: 'BEB-07', nome: 'Ursinhos lilás', tipo: 'bebe', fotos: ['beb-07.jpg'] },
        { codigo: 'BEB-08', nome: 'Ursinhos baby cortina', tipo: 'bebe', fotos: ['beb-08.jpg'] },
        { codigo: 'BEB-09', nome: 'Branco dourado', tipo: 'bebe', fotos: ['beb-09.jpg'] },
        { codigo: 'BEB-10', nome: 'Borboletas pastel', tipo: 'bebe', fotos: ['beb-10.jpg'] },
        { codigo: 'BEB-11', nome: 'Baby Samuel azul verde', tipo: 'bebe', fotos: ['beb-11.jpg'] },
        { codigo: 'BEB-12', nome: 'Neutro balões', tipo: 'bebe', fotos: ['beb-12.jpg'] },
        { codigo: 'BEB-13', nome: 'Jardim branco', tipo: 'bebe', fotos: ['beb-13.jpg'] },
        { codigo: 'BEB-14', nome: 'Azul marrom', tipo: 'bebe', fotos: ['beb-14.jpg'] },
        { codigo: 'BEB-15', nome: 'Branco dourado arco', tipo: 'bebe', fotos: ['beb-15.jpg'] },
        { codigo: 'BEB-16', nome: 'Verde minimal', tipo: 'bebe', fotos: ['beb-16.jpg'] },
        { codigo: 'BEB-17', nome: 'Verde Oh Baby', tipo: 'bebe', fotos: ['beb-17.jpg'] },
        { codigo: 'BEB-18', nome: 'Ursinhos luzes pastel', tipo: 'bebe', fotos: ['beb-18.jpg'] },
        { codigo: 'BEB-19', nome: 'Revelação elefantes', tipo: 'revelacao', fotos: ['beb-19.jpg'] },
        { codigo: 'BEB-20', nome: 'Arco rosé amarelo', tipo: 'bebe', fotos: ['beb-20.jpg'] },
        { codigo: 'BEB-21', nome: 'Azul Oh Baby', tipo: 'bebe', fotos: ['beb-21.jpg'] },
        { codigo: 'BEB-22', nome: 'Ursinhos lilás verde', tipo: 'bebe', fotos: ['beb-22.jpg'] },
        { codigo: 'BEB-23', nome: 'Ovelhinha verde rosa', tipo: 'bebe', fotos: ['beb-23.jpg'] },
        { codigo: 'BEB-24', nome: 'Revelação ursinho boy e girl', tipo: 'revelacao', fotos: ['beb-24.jpg'] },
        { codigo: 'BEB-25', nome: 'Revelação elefantes madeira', tipo: 'revelacao', fotos: ['beb-25.jpg'] },
        { codigo: 'BEB-26', nome: 'Príncipe azul', tipo: 'bebe', fotos: ['beb-26.jpg'] },
        { codigo: 'BEB-27', nome: 'Cegonha minimalista', tipo: 'bebe', fotos: ['beb-27.jpg'] },
        { codigo: 'BEB-28', nome: 'Rosa ursinhos', tipo: 'bebe', fotos: ['beb-28.jpg'] },
        { codigo: 'BEB-29', nome: 'Ovelhinha floral rosa', tipo: 'bebe', fotos: ['beb-29.jpg'] },
        { codigo: 'BEB-30', nome: 'Rosa arco balões', tipo: 'bebe', fotos: ['beb-30.jpg'] },
        { codigo: 'BEB-31', nome: 'Panda roxo', tipo: 'bebe', fotos: ['beb-31.jpg'] },
        { codigo: 'BEB-32', nome: 'Bebê azul rosa marrom', tipo: 'bebe', fotos: ['beb-32.jpg'] },
        { codigo: 'BEB-33', nome: 'Revelação silhuetas', tipo: 'revelacao', fotos: ['beb-33.jpg'] }
      ]
    },
    {
      slug: 'aniversarios', nome: 'Aniversários', emoji: '🥂',
      capa: '',
      filtros: [ { id: 'adulto', nome: 'Aniversários' }, { id: '15-anos', nome: '15 anos' }, { id: 'boteco', nome: 'Boteco' } ],
      kits: [
        { codigo: 'ANI-01', nome: 'Limão azul', tipo: 'adulto', fotos: ['ani-01.jpg'] },
        { codigo: 'ANI-02', nome: 'Rosa branco balões', tipo: 'adulto', fotos: ['ani-02.jpg'] },
        { codigo: 'ANI-03', nome: 'Corporativo 25 anos', tipo: 'adulto', fotos: ['ani-03.jpg'] },
        { codigo: 'ANI-04', nome: 'Roxo dourado', tipo: 'adulto', fotos: ['ani-04.jpg'] },
        { codigo: 'ANI-05', nome: '15 anos bronze branco', tipo: '15-anos', fotos: ['ani-05.jpg'] },
        { codigo: 'ANI-06', nome: 'Borboletas rosa', tipo: 'adulto', fotos: ['ani-06.jpg'] },
        { codigo: 'ANI-07', nome: 'Pink laranja', tipo: 'adulto', fotos: ['ani-07.jpg'] },
        { codigo: 'ANI-08', nome: '18 anos preto prata', tipo: 'adulto', fotos: ['ani-08.jpg'] },
        { codigo: 'ANI-09', nome: 'Tardezinha tropical', tipo: 'adulto', fotos: ['ani-09.jpg'] },
        { codigo: 'ANI-10', nome: '21 anos preto rosé', tipo: 'adulto', fotos: ['ani-10.jpg'] },
        { codigo: 'ANI-11', nome: 'Parabéns Duda roxo', tipo: 'adulto', fotos: ['ani-11.jpg'] },
        { codigo: 'ANI-12', nome: 'Natural bege', tipo: 'adulto', fotos: ['ani-12.jpg'] },
        { codigo: 'ANI-13', nome: '40 anos rose gold', tipo: 'adulto', fotos: ['ani-13.jpg'] },
        { codigo: 'ANI-14', nome: 'Náutico azul branco', tipo: 'adulto', fotos: ['ani-14.jpg'] },
        { codigo: 'ANI-15', nome: '30 anos preto prata', tipo: 'adulto', fotos: ['ani-15.jpg'] },
        { codigo: 'ANI-16', nome: 'Verde oliva', tipo: 'adulto', fotos: ['ani-16.jpg'] },
        { codigo: 'ANI-17', nome: '13 anos rose gold', tipo: 'adulto', fotos: ['ani-17.jpg'] },
        { codigo: 'ANI-18', nome: '18 anos rosa e prata', tipo: 'adulto', fotos: ['ani-18.jpg'] },
        { codigo: 'ANI-19', nome: '30 anos rosé', tipo: 'adulto', fotos: ['ani-19.jpg'] },
        { codigo: 'ANI-20', nome: '15 anos preto e dourado', tipo: '15-anos', fotos: ['ani-20.jpg'] },
        { codigo: 'ANI-21', nome: '50 anos verde e dourado', tipo: 'adulto', fotos: ['ani-21.jpg'] },
        { codigo: 'ANI-22', nome: '15 anos azul e dourado', tipo: '15-anos', fotos: ['ani-22.jpg'] },
        { codigo: 'ANI-23', nome: '21 anos colorido', tipo: 'adulto', fotos: ['ani-23.jpg'] },
        { codigo: 'ANI-24', nome: '47 anos rose gold', tipo: 'adulto', fotos: ['ani-24.jpg'] },
        { codigo: 'ANI-25', nome: '20 anos rosé', tipo: 'adulto', fotos: ['ani-25.jpg'] },
        { codigo: 'ANI-26', nome: '19 anos rosé', tipo: 'adulto', fotos: ['ani-26.jpg'] },
        { codigo: 'BOT-01', nome: 'Preto vermelho branco', tipo: 'boteco', fotos: ['bot-01.jpg'] },
        { codigo: 'BOT-02', nome: '40 anos preto rosa', tipo: 'boteco', fotos: ['bot-02.jpg'] },
        { codigo: 'BOT-03', nome: 'Painel cervejas', tipo: 'boteco', fotos: ['bot-03.jpg'] }
      ]
    },
    {
      slug: 'chas-da-noiva', nome: 'Chás da Noiva & Casa Nova', emoji: '🏡',
      capa: '',
      filtros: [ { id: 'cozinha', nome: 'Chá de cozinha' }, { id: 'lingerie', nome: 'Chá de lingerie' } ],
      kits: [
        { codigo: 'COZ-01', nome: 'Receita do amor cobre', tipo: 'cozinha', fotos: ['coz-01.jpg'] },
        { codigo: 'COZ-02', nome: 'Palha e quadros', tipo: 'cozinha', fotos: ['coz-02.jpg'] },
        { codigo: 'COZ-03', nome: 'Arco floral pêssego', tipo: 'cozinha', fotos: ['coz-03.jpg'] },
        { codigo: 'COZ-04', nome: 'Verde e branco lembrancinhas', tipo: 'cozinha', fotos: ['coz-04.jpg'] },
        { codigo: 'COZ-05', nome: 'Monograma TG', tipo: 'cozinha', fotos: ['coz-05.jpg'] },
        { codigo: 'COZ-06', nome: 'Casa nova rosa e azul', tipo: 'cozinha', fotos: ['coz-06.jpg'] },
        { codigo: 'COZ-07', nome: 'Boho verde', tipo: 'cozinha', fotos: ['coz-07.jpg'] },
        { codigo: 'COZ-08', nome: 'Rosa e azul clássico', tipo: 'cozinha', fotos: ['coz-08.jpg'] },
        { codigo: 'COZ-09', nome: 'Boho rosa e dourado', tipo: 'cozinha', fotos: ['coz-09.jpg'] },
        { codigo: 'COZ-10', nome: 'Receita do amor balões', tipo: 'cozinha', fotos: ['coz-10.jpg'] },
        { codigo: 'COZ-11', nome: 'Rosa preto e dourado', tipo: 'cozinha', fotos: ['coz-11.jpg'] },
        { codigo: 'COZ-12', nome: 'Gabinete branco rosa e dourado', tipo: 'cozinha', fotos: ['coz-12.jpg'] },
        { codigo: 'COZ-13', nome: 'Quadro circular e gabinete branco', tipo: 'cozinha', fotos: ['coz-13.jpg'] },
        { codigo: 'COZ-14', nome: 'Arco rosa preto e dourado', tipo: 'cozinha', fotos: ['coz-14.jpg'] },
        { codigo: 'LIN-01', nome: 'Vestido e balões pink', tipo: 'lingerie', fotos: ['lin-01.jpg'] },
        { codigo: 'LIN-02', nome: 'Noiva rosa', tipo: 'lingerie', fotos: ['lin-02.jpg'] },
        { codigo: 'LIN-03', nome: 'Floral romântico', tipo: 'lingerie', fotos: ['lin-03.jpg'] },
        { codigo: 'LIN-04', nome: 'Pink preto e dourado', tipo: 'lingerie', fotos: ['lin-04.jpg'] },
        { codigo: 'LIN-05', nome: 'Minimalista pink e preto', tipo: 'lingerie', fotos: ['lin-05.jpg'] }
      ]
    },
    {
      slug: 'batismo', nome: 'Batismo', emoji: '🕊️',
      capa: '',
      kits: [
        { codigo: 'BAT-01', nome: 'Branco floral', fotos: ['bat-01.jpg'] },
        { codigo: 'BAT-02', nome: 'Anjos rosé balões', fotos: ['bat-02.jpg'] },
        { codigo: 'BAT-03', nome: 'Anjos rosa central', fotos: ['bat-03.jpg'] },
        { codigo: 'BAT-04', nome: 'Anjos rosa cadeira', fotos: ['bat-04.jpg'] },
        { codigo: 'BAT-05', nome: 'Anjos rosé minimal', fotos: ['bat-05.jpg'] },
        { codigo: 'BAT-06', nome: 'Anjos rosa doces', fotos: ['bat-06.jpg'] },
        { codigo: 'BAT-07', nome: 'Externo rosé cadeira', fotos: ['bat-07.jpg'] }
      ]
    },
    {
      slug: 'infantil', nome: 'Festa Infantil', emoji: '🎈',
      capa: '',
      // Em breve: temas e personagens. Enquanto estiver vazia, a página mostra "em breve".
      kits: [
      ]
    },
    {
      slug: 'diversos', nome: 'Estilos para qualquer ocasião', emoji: '✨',
      capa: '',
      kits: [
        { codigo: 'DIV-01', nome: 'Festa rosa mesa clássica', fotos: ['div-01.jpg'] },
        { codigo: 'DIV-02', nome: 'Floral rosa com carrinho', fotos: ['div-02.jpg'] },
        { codigo: 'DIV-03', nome: 'Círculo iluminado rosa', fotos: ['div-03.jpg'] },
        { codigo: 'DIV-04', nome: 'Jardim verde lilás', fotos: ['div-04.jpg'] },
        { codigo: 'DIV-05', nome: 'Margaridas amarelas', fotos: ['div-05.jpg'] },
        { codigo: 'DIV-06', nome: 'Arco floral minimal', fotos: ['div-06.jpg'] },
        { codigo: 'DIV-07', nome: 'Balões rosé e branco', fotos: ['div-07.jpg'] },
        { codigo: 'DIV-08', nome: 'Minecraft cactos', fotos: ['div-08.jpg'] },
        { codigo: 'DIV-09', nome: 'Minecraft colorido', fotos: ['div-09.jpg'] },
        { codigo: 'DIV-10', nome: 'Azul marinho e dourado', fotos: ['div-10.jpg'] },
        { codigo: 'DIV-11', nome: 'Lilás e dourado', fotos: ['div-11.jpg'] },
        { codigo: 'DIV-12', nome: 'Rose gold minimal', fotos: ['div-12.jpg'] },
        { codigo: 'DIV-13', nome: 'Coral e rosé', fotos: ['div-13.jpg'] },
        { codigo: 'DIV-14', nome: 'Azul renda floral', fotos: ['div-14.jpg'] }
      ]
    }
  ]
};
