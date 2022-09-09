///8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
///N  é um valor informado pelo usuário

var n= parseInt(prompt("Digite um número"));
var n0= 1

while(n<=0){
    n=prompt("Ops... Digite um número maior do que zero");
}

for(var i=1; i<=n; i++){
    document.write(i+"<br>");
}

