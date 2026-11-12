alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if (querJogar) {
    alert("Boa sorte , " + nomeJogador);
}
else {
    alert("Que pena, até a próxima ");
}

let numero = prompt("Digite o número:");

alert(Number(numero) + 10);