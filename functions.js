function boaSorte(nomeJogador) {
    alert("Boa sorte, " + nomeJogador);

}

function checkNumber(numeroDigitado, numeroSecreto) {



    if (numeroSecreto == numeroDigitado) {
        alert("Parabéns, você acertou");
        return true;

    }
    else if (numeroDigitado >= 8 && numeroDigitado <= 10) {
        alert("É menor!");
        return false;

    }
    else if (numeroDigitado >= 1 && numeroDigitado <= 6) {
        alert("É maior!");
        return false;
    }
    else if (numeroDigitado > 10 || numeroDigitado < 1) {
        alert("Número inválido! Digite de 1 à 10.");
        return false;

    }

    else if (numeroDigitado !== null || tipoEntrada == String) {
        alert("Por favor digite apenas números!")
        return false;

    }
}