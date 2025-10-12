let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.1});
}

function exibirMensagemInicial() {
    exibirTexto("h1", "Jogo do Número Secreto");
    exibirTexto("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTexto("h1", "Acertou!");
        let quantidadeTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${quantidadeTentativas}!`;
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTexto("p", "O número secreto é menor!");
        } else {
            exibirTexto("p", "O número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeNumerosSorteados >= 4) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}   

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}