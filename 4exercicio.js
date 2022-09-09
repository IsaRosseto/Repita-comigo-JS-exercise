///4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
var começo = 15 ;
var ultimo = 100 ;
var contagem = 0;

while(começo < ultimo) {
    começo  += 1;
    contagem += começo
}

console.log(começo);
console.log(contagem);
var media = parseInt (contagem/85);

alert("A média entre os números de 15 a 100 é: " + media);

