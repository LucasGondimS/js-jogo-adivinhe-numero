alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if (querJogar) {
    alert("Boa sorte , " + nomeJogador);
}
else {
    alert("Que pena, até a próxima ");
}

const numeroSecreto = 7;

let numeroDigitado = prompt("Digite o número Secreto:");

if (numeroSecreto == numeroDigitado) {
    alert("Parabéns, você acertou");
}
else if (numeroSecreto > numeroDigitado) {
    alert("É menor!");
}
else {
    alert("É maior!");
}