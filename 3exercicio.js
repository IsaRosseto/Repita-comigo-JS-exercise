///3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
///Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var contagem = 10
var ultimo = 0


while (contagem > ultimo) {
    document.write(contagem  +"<br>");
    contagem = contagem -=1;
}
