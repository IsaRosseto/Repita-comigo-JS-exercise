///5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var numero1 = parseInt(prompt("Digite o primeiro numero"));
var numero2 = parseInt(prompt("Digite o segundo número"));
var contagem = numero2 - numero1
var calculo = 0;
alert ("A média aritmética dos números  entre " + numero1 + " e " + numero2)

while (numero1 <= numero2) {
    calculo += numero1
    numero1++
}

var media = calculo/contagem;
alert(" é " + media);

