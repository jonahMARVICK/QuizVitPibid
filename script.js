const perguntas = [
  {
    pergunta: "Qual é a definição correta de vitaminas de acordo com a biologia?",
    respostas: [
      { id: 1, texto: "Substâncias inorgânicas produzidas em grandes quantidades pelo corpo.", correta: false },
      { id: 2, texto: "Qualquer substância orgânica necessária em pequeníssima quantidade que o organismo não consegue produzir.", correta: false },
      { id: 3, texto: "Nutrientes que fornecem alto teor calórico para o metabolismo.", correta: false },
      { id: 4, texto: "Proteínas que substituem a necessidade de alimentação sólida.", correta: false },
    ],
  },
  {
    pergunta: "Muitas vitaminas atuam como __________, ativando reações enzimáticas no metabolismo celular.",
    respostas: [
      { id: 1, texto: "Carboidratos", correta: false },
      { id: 2, texto: "Co-fatores", correta: true },
      { id: 3, texto: "Hormônios", correta: false },
      { id: 4, texto: "Anticorpos", correta: false },
    ],
  },
  {
    pergunta: "Sobre o valor energético das vitaminas, é correto afirmar que:",
    respostas: [
      { id: 1, texto: "Elas são a principal fonte de gordura do corpo.", correta: false },
      { id: 2, texto: "Cada grama de vitamina possui 9 calorias.", correta: false },
      { id: 3, texto: "Vitaminas são nutrientes orgânicos que não possuem calorias.", correta: true },
      { id: 4, texto: "Elas dão energia diretamente, substituindo o açúcar.", correta: false },
    ],
  },
  {
    pergunta: "Quais são as vitaminas classificadas como lipossolúveis (solúveis em gordura)?",
    respostas: [
      { id: 1, texto: "Complexo B e Vitamina C.", correta: false },
      { id: 2, texto: "Vitaminas A, B, C e D.", correta: false },
      { id: 3, texto: "Vitaminas A, D, E e K.", correta: true },
      { id: 4, texto: "Apenas as vitaminas extraídas de vegetais verdes.", correta: false },
    ],
  },
  {
    pergunta: "A deficiência de qual vitamina causa a \"cegueira noturna\" (dificuldade de enxergar no escuro)?",
    respostas: [
      { id: 1, texto: "Vitamina D", correta: false },
      { id: 2, texto: "Vitamina C", correta: false },
      { id: 3, texto: "Vitamina K", correta: false },
      { id: 4, texto: "Vitamina A", correta: true },
    ],
  },
  {
    pergunta: "Qual vitamina tem sua produção estimulada pela exposição à luz solar (cerca de 15 min/dia)?",
    respostas: [
      { id: 1, texto: "Vitamina E", correta: false },
      { id: 2, texto: "Vitamina D", correta: true },
      { id: 3, texto: "Vitamina B12", correta: false },
      { id: 4, texto: "Vitamina A", correta: false },
    ],
  },
  {
    pergunta: "A Vitamina K desempenha um papel fundamental em qual processo do organismo?",
    respostas: [
      { id: 1, texto: "Coagulação sanguínea, evitando sangramentos.", correta: true },
      { id: 2, texto: "Produção de colágeno para a pele.", correta: false },
      { id: 3, texto: "Proteção das células contra o envelhecimento.", correta: false },
      { id: 4, texto: "Absorção de ferro dos alimentos.", correta: false },
    ],
  },
  {
    pergunta: "O sangramento nas gengivas e a demora na cicatrização de feridas são sinais da falta de qual vitamina?",
    respostas: [
      { id: 1, texto: "Vitamina K", correta: false },
      { id: 2, texto: "Vitamina B1", correta: false },
      { id: 3, texto: "Vitamina C", correta: true },
      { id: 4, texto: "Vitamina E", correta: false },
    ],
  },
  {
    pergunta: "Como o corpo lida com as vitaminas hidrossolúveis (Complexo B e C)?",
    respostas: [
      { id: 1, texto: "Elas ficam estocadas na gordura do corpo por meses.", correta: false },
      { id: 2, texto: "Elas saem na urina e precisam ser repostas diariamente.", correta: true },
      { id: 3, texto: "O corpo as transforma em energia calórica pura.", correta: false },
      { id: 4, texto: "Elas são absorvidas apenas através da pele.", correta: false },
    ],
  },
  {
    pergunta: "Qual é a recomendação para aumentar a absorção de Vitamina A ao comer vegetais como a cenoura?",
    respostas: [
      { id: 1, texto: "Comer a cenoura sempre cozida em água pura.", correta: false },
      { id: 2, texto: "Consumir com uma fonte de gordura, como azeite ou maionese.", correta: true },
      { id: 3, texto: "Beber muita água logo após a ingestão.", correta: false },
      { id: 4, texto: "Comer apenas a casca da cenoura.", correta: false },
    ],
  },
  {
    pergunta: "A deficiência de Vitamina D em crianças pode levar a qual condição específica?",
    respostas: [
      { id: 1, texto: "Sangramento excessivo.", correta: false },
      { id: 2, texto: "Perda de olfato.", correta: false },
      { id: 3, texto: "Ossos fracos.", correta: true },
      { id: 4, texto: "Anemia profunda.", correta: false },
    ],
  },
  {
    pergunta: "Além de auxiliar na cicatrização, a Vitamina C é fundamental para a absorção de qual mineral?",
    respostas: [
      { id: 1, texto: "Cálcio", correta: false },
      { id: 2, texto: "Magnésio", correta: false },
      { id: 3, texto: "Ferro", correta: true },
      { id: 4, texto: "Potássio", correta: false },
    ],
  },
  {
    pergunta: "Qual vitamina do Complexo B deve ser suplementada por vegetarianos estritos para evitar a anemia?",
    respostas: [
      { id: 1, texto: "B1", correta: false },
      { id: 2, texto: "B6", correta: false },
      { id: 3, texto: "B12", correta: true },
      { id: 4, texto: "B2", correta: false },
    ],
  },
  {
    pergunta: "Qual é o papel principal das vitaminas em relação aos nutrientes que ingerimos (como carboidratos e proteínas)?",
    respostas: [
      { id: 1, texto: "Elas substituem o açúcar no sangue.", correta: false },
      { id: 2, texto: "Elas ajudam o corpo a usar os nutrientes que comemos.", correta: true },
      { id: 3, texto: "Elas servem para dar sabor aos alimentos.", correta: false },
      { id: 4, texto: "Elas impedem a absorção de gorduras ruins.", correta: false },
    ],
  },
  {
    pergunta: "Por que a Vitamina C não é considerada uma \"vitamina\" para cães, mas é para humanos?",
    respostas: [
      { id: 1, texto: "Porque cães não precisam de Vitamina C.", correta: false },
      { id: 2, texto: "Porque humanos precisam de doses muito maiores.", correta: false },
      { id: 3, texto: "Porque os cães não conseguem produzi-la em suas próprias células.", correta: true },
      { id: 4, texto: "Porque ela é tóxica para os animais domésticos.", correta: false },
    ],
  },
  {
    pergunta: "Pacientes que utilizam medicamentos anticoagulantes (\"afinar o sangue\") devem ter cuidado com o consumo excessivo de quais vegetais?",
    respostas: [
      { id: 1, texto: "Frutas cítricas como o limão.", correta: false },
      { id: 2, texto: "Vegetais verdes como couve e espinafre (ricos em Vitamina K).", correta: true },
      { id: 3, texto: "Legumes alaranjados como abóbora.", correta: false },
      { id: 4, texto: "Oleaginosas como castanhas e abacate.", correta: false },
    ],
  },
  {
    pergunta: "Qual é a principal função da Vitamina E no organismo?",
    respostas: [
      { id: 1, texto: "Fixar o cálcio nos ossos.", correta: false },
      { id: 2, texto: "Atuar como antioxidante, protegendo as células do envelhecimento.", correta: true },
      { id: 3, texto: "Produzir glóbulos vermelhos.", correta: false },
      { id: 4, texto: "Melhorar a visão noturna.", correta: false },
    ],
  },
  {
    pergunta: "O que acontece no metabolismo celular quando há falta de uma vitamina que atua como co-fator?",
    respostas: [
      { id: 1, texto: "O corpo começa a produzir calorias extras.", correta: false },
      { id: 2, texto: "A enzima correspondente não se ativa, alterando o metabolismo.", correta: true },
      { id: 3, texto: "O organismo passa a utilizar minerais para substituir a vitamina.", correta: false },
      { id: 4, texto: "As células param de se reproduzir imediatamente.", correta: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const botoesResposta = document.getElementById("answer-buttons");
const botaoProxima = document.getElementById("next-btn");

let indicePerguntaAtual = 0;
let pontos = 0;

function iniciarQuiz() {
  indicePerguntaAtual = 0;
  pontos = 0;
  botaoProxima.innerHTML = "Próxima";
  mostrarPergunta();
}

function mostrarPergunta() {
  limparEstado();

  const perguntaAtual = perguntas[indicePerguntaAtual];
  const numeroPergunta = indicePerguntaAtual; //bug

  questionElement.innerHTML =
    numeroPergunta + ". " + perguntaAtual.pergunta;

  perguntaAtual.respostas.forEach((resposta) => {
    const button = document.createElement("button");

    button.innerHTML = resposta.texto;
    button.classList.add("btn");
    button.dataset.id = resposta.id;

    if (resposta.correta) {
      button.dataset.correta = "true";
    }

    button.addEventListener("click", selecionarResposta);
    botoesResposta.appendChild(button);
  });
}

function limparEstado() {
  botaoProxima.style.display = "none";

  while (botoesResposta.firstChild) {
    botoesResposta.removeChild(botoesResposta.firstChild);
  }
}

function selecionarResposta(e) {
  const botaoSelecionado = e.target;
  const estaCorreta = botaoSelecionado.dataset.correta === "true";

  if (estaCorreta) {
    botaoSelecionado.classList.add("correct");
    //bug
  } else {
    botaoSelecionado.classList.add("incorrect");
  }

  Array.from(botoesResposta.children).forEach((button) => {
    if (button.dataset.correta === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  botaoProxima.style.display = "block";
}

function mostrarPontuacao() {
  limparEstado();

  questionElement.innerHTML =
    `Você acertou ${pontos} de ${perguntas.length}!`;

  botaoProxima.innerHTML = "Próxima pergunta"; //bug
  botaoProxima.style.display = "block";
}

function avancarPergunta() {
  indicePerguntaAtual++;

  if (indicePerguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarPontuacao();
  }
}

botaoProxima.addEventListener("click", () => {
  if (indicePerguntaAtual < perguntas.length) {
    avancarPergunta();
  } else {
    iniciarQuiz();
  }
});

iniciarQuiz();
