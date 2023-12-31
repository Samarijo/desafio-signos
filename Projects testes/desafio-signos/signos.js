const signos = [
      {
        "nome": "Aries",
        "descricao": "Impulsivo, o ariano nao pensa muito sobre seus atos. E aquele que primeiro age, depois reflete.Agitado, precisa de muita atividade para gastar a energia, senao pode ficar agressivo e explosivo.",
        "data_inicio": "21/03",
        "data_fim": "20/04"
      },
      {
        "nome": "Touro",
        "descricao": "Teimoso, o taurino e determinado e protetor. Precisa de seguranca e estabilidade para ser feliz,e conquista isso com muito trabalho e concentracao. Carinhoso, o taurino pode ser ciumento com quem ama.",
        "data_inicio": "21/04",
        "data_fim": "21/05"
      },
      {
        "nome": "Gemeos",
        "descricao": "Espontaneo e um pouco instavel, o geminiano e uma verdadeira caixinha de surpresas. Como e volatil,muitas vezes nem mesmo o geminiano se entende, mas o importante e que ele esta sempre de bom humor e em busca de aventuras.",
        "data_inicio": "22/05",
        "data_fim": "21/06"
      },
      {
        "nome": "Cancer",
        "descricao": "Familia e a palavra-chave para o canceriano. Tranquilo e emotivo, gosta de ficar em casa, fazerprogramas com quem ama e curtir momentos com os parentes. Curioso, faz amizade com facilidade, mas pode ser um pouco sensivel.",
        "data_inicio": "21/06",
        "data_fim": "23/07"
      },
      {
        "nome": "Leao",
        "descricao": "Este e signo que veio para brilhar. O leonino gosta de chamar a atencao e ser o centro do mundo,mas tambem e muito amavel e leal. Simpatico e comunicativo, o nativo de leao pode ser um pouco ciumento e inseguro.",
        "data_inicio": "24/07",
        "data_fim": "23/08"
      },
      {
        "nome": "Virgem",
        "descricao": "Perspicaz e inteligente, o virginiano esta acostumado com o sucesso, por isso se cobra muito assim como aos demais. Por isso, pode ser um pouco rigido e magoar quem ama. Timido, prefere programastranquilos a grandes eventos.",
        "data_inicio": "24/08",
        "data_fim": "23/09"
      },
      {
        "nome": "Libra",
        "descricao": "O libriano gosta do que e belo e harmonioso. Nao gosta de conflitos e por isso tentaser imparcial em debates e brigas. Indeciso, pode demorar muito para escolher coisas simples, como oque comer ou vestir. Bom gosto define este signo.",
        "data_inicio": "24/09",
        "data_fim": "23/10"
      },
      {
        "nome": "Escorpiao",
        "descricao": "Determinado, o escorpiano vai ate o fim para conquistar os seus objetivos. Sensual e romantico,gosta de estar em relacionamentos, mas pode ser desconfiado enquanto nao se sentir seguro com a pessoa.",
        "data_inicio": "24/10",
        "data_fim": "22/11"
      },
      {
        "nome": "Sagitario",
        "descricao": "Um signo de bem com a vida, que esta sempre em busca de acao e que vive rodeado de amigos. Este e o signo de sagitario, que e sonhador e adora conhecer pessoas e lugares novos.",
        "data_inicio": "23/11",
        "data_fim": "21/12"
      },
      {
        "nome": "Capricornio",
        "descricao": "Trabalhador, timido e educado, o capricornio pode passar uma imagem de fechado e ate mesmoantipatico, mas e que ele e precisa confiar em quem esta ao seu lado para se abrir totalmente. Com paciencia,ele se mostra um amigo leal e um companheiro fiel.",
        "data_inicio": "22/12",
        "data_fim": "20/01"
      },
      {
        "nome": "Aquario",
        "descricao": "Independente, o aquariano preza muito por sua liberdade. Gosta de viajar, sair econhecer pessoas novas. Tem uma mente aberta e gosta de tudo o que e inovador e moderno, desde roupas etecnologia, ate mesmo atitudes comportamentais.",
        "data_inicio": "21/01",
        "data_fim": "19/02"
      },
      {
        "nome": "Peixes",
        "descricao": "Este e o signo mais romantico do zodiaco. Sonhador e carinhoso, ele esta semprepreocupado com o bem estar dos outros. Sensivel e carinhoso, acredita em contos de fadas e acha quetodos merecem um final feliz.",
        "data_inicio": "20/02",
        "data_fim": "20/03"
      }
  ]


function getSignByBirthdate(birthdate) {
  const [year, month, day] = birthdate.split('-').map(Number);
  const formattedBirthdate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  for (const sign of signos) {
    const startDate = new Date(`1994-${sign.data_inicio}`);
    const endDate = new Date(`1994-${sign.data_fim}`);

    if (formattedBirthdate >= startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }) && formattedBirthdate <= endDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })) {
      return sign.nome;
    }
  }

  return 'Signo não encontrado';
}

const birthDate = '1994-07-11';
const sign = getSignByBirthdate(birthDate);
console.log(`Sign: ${sign}`);