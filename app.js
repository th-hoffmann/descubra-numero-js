alert("Olá! Seja Bem Vindo ao Jogo!");
let numeroSecreto = 42;
console.log(numeroSecreto);
let palpite = prompt("Digite um número entre 0 e 100:");

// Se palpite for igual ao número secreto, exiba uma mensagem de parabéns
if (palpite == numeroSecreto) {
    alert(`Parabens! Você acertou o número secreto! ${numeroSecreto}`);
} else {
    alert("Que pena! Você errou o número secreto. :( ");
}