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

let tipoEntrada = typeof numeroDigitado;

let acertou = false;

while (acertou == false) {
    numeroDigitado = prompt("Digite o número Secreto:");
    numeroDigitado = Number(numeroDigitado);

    if (numeroSecreto == numeroDigitado) {
        alert("Parabéns, você acertou");
        acertou = true;
    }
    else if (numeroDigitado >= 8 && numeroDigitado <= 10) {
        alert("É menor!");
    }
    else if (numeroDigitado >= 1 && numeroDigitado <= 6) {
        alert("É maior!");
    }
    else if (numeroDigitado > 10 || numeroDigitado < 1) {
        alert("Número inválido! Digite de 1 à 10.");
    }
    
    else if (numeroDigitado !== null || tipoEntrada == String) {
        alert("Por favor digite apenas números!")
    
    
    }
}



