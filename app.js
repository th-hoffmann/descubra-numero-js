alert("Olá! Seja Bem Vindo ao Jogo!");
let numeroLimite = 100;
let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
let palpite;
let tentativas = 1;

//Enquanto o palpite não for um número válido, continue pedindo um novo palpite
while (palpite != numeroSecreto) {
    palpite = prompt(`Digite um número entre 1 e ${numeroLimite}`);
    // Se palpite for igual ao número secreto, exiba uma mensagem de parabéns
    if (palpite == numeroSecreto) {
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`Você errou! O número secreto é menor que ${palpite}`);
        } else {
            alert(`Você errou! O número secreto é maior que ${palpite}`);
        }
        // Incrementa o número de tentativas
        tentativas++;
    }
}

let mensagemFinal = tentativas > 1 ? "tentativas" : "tentativa";
// Exiba uma mensagem de parabéns com o número de tentativas
alert(`Parabens! Você acertou o número secreto: ${numeroSecreto} em ${tentativas} ${mensagemFinal}.`);

