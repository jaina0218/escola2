const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você presencia uma situação de violência domestica em sua casa, o que deve fazer?",

        alternativas: [
            {
                texto:"Ligar para a polícia.",
                afirmacao: "Você é contra violências porém prefere não se envolver no assunto pois acha perigoso, e pode sair machucado."
            },
            {
                texto: "Tenta segurar o agressor enquanto ele bate, para defender sua mãe.",
                afirmacao:"Você é uma pessoa corajosa, e não tem medo do perigo."

            }   
           
        ]
    },
    {
        enunciado: "As fontes renováveis de energia desempenham um papel crucial na transição para um futuro sustentável. Quanto às fontes de energia renováveis, o que você acha sobre a exploração de novas formas menos poluentes, que automaticamente agridem menos o meio ambiente?",
        alternativas: [
            {
                texto: "Concordo, pois os recursos do nosso planeta são finitos, e precisamos explorar formas menos agressivas.",
                afirmacao: "Você é um cidadão comprometido com a manutenção e bem  do nosso planeta no longo prazo."
            },
            {
                texto:  "Discordo, pois os altos custos do processo acaba  inviabilizando o mesmo.",
                afirmacao: "Você é uma pessoa que se preocupa com a questão econômica, prezando o valor  dinheiro."
            }               
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto: "Pratico sempre que possível, pois acredito que dessa forma terei um bom condicionamento físico e uma melhor qualidade de vida.",
                afirmacao: "Você é uma pessoa que procura cuidar bem do seu corpo praticando exercícios regularmente."
            },
            {
                texto:  "Acredito que a prática de um esporte está ligada apenas ao lazer, e prefiro utilizar o meu tempo estudando  e assistindo séries.",
                afirmacao: "Você é uma pessoa que prefere ter o seu tempo de lazer voltado a atividades culturais."
            }             
           
        ]
    }  
];
    
    
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Você decide o futuro da IA</title>
        </head>
        <body>
            <div class="caixa-principal">
                <h1>Você decide o futuro do IA</h1>
                <div class="caixa-perguntas">
                    Você já sabe quais são as perguntas que irão nortear sua missão ?
                </div>
                <div class="caixa-alternativas">
                    <button>Sim, eu já sei</button>
                    <button>Não, estou ajustando algumas coias</button>
                </div>
                <div class="caixa-resultado">
                    <p class="texto-resultado">
                        E o seu texto final, já está pronto ?
                    </p>
                </div>
            </div>
            <script src="script.js"></script>
        </body>
        </html>
        
           caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta(); 
