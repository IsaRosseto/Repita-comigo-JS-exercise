///11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

var numeros=[];
var numerosNoIntervalo=[];
var numerosFora=[];
for(var i=0; i<10; i++){
var numero=parseInt(prompt("Digite um número"));
numeros[i]=numero;
}

for(var i=0; i<numeros.length; i++){
    if(numeros[i]>=24 && numeros[i]<=42){
        numerosNoIntervalo.push(" "+numeros[i]);
    }else{
        numerosFora.push(" "+numeros[i]);
    }
}

if(numerosNoIntervalo.length==0){
document.write("Os valores entre 24 e 42 foram <b>"+numerosNoIntervalo.length+"</b> <br>");
}else{
 document.write("Os valores entre 24 e 42 foram <b>"+numerosNoIntervalo.length+"</b> ("+numerosNoIntervalo+")<br>");
}

if(numerosFora.length==0){
document.write("Os valores menores que 24 ou maiores que 42 foram <b>"+numerosFora.length+"</b>");
}else{
document.write("Os valores menores que 24 ou maiores que 42 foram <b>"+numerosFora.length+"</b> ("+numerosFora+")");
}

