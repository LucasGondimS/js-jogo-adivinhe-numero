alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

const numeroSecreto = 7;
let tipoEntrada = typeof numeroDigitado;

let acertou = false;

if (querJogar) {
    boaSorte(nomeJogador);

    while (acertou === false) {
        numeroDigitado = prompt("Digite o número Secreto:");
        numeroDigitado = Number(numeroDigitado);
        acertou = checkNumber(numeroDigitado, numeroSecreto);

    }
}
else {
    alert("Que pena, até a próxima ");
}








