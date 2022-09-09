///10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var n = parseInt(prompt("Digite um número"));
var multiplicação = 0;
var começo = 1;

while(começo <= n){

while(multiplicação <= 10){
document.write(começo + " X " + multiplicação + " = " + (começo * multiplicação) + "<br>");
multiplicação++;
}
começo++;
multiplicação = 0;
document.write("<br><br>");
}
            