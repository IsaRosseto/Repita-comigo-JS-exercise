///1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.


var numero1 = parseInt(prompt("Digite um valor"));
var numero2 = parseInt(prompt("Digite outro valor"));
var divisao = (numero1 / numero2);

if (numero2 <= 0 || isNaN(numero2)) {

    alert("Você não pode escolher um valor menor ou igual a 0");
}