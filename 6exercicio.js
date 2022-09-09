///6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var todosalunos=[];
var todasnotas=[];
do {
var aluno = prompt('Digite o nome do aluno: ');
var nota01 = parseInt(prompt("Digite a primeira nota: "));
var nota02 = parseInt(prompt("Digite a segunda nota: "));
var media = (nota01 + nota02)  /2 ;
todosalunos.push(aluno);
todasnotas.push(media);


if (media >= 9.5) {
    alert ("O aluno " + aluno + " foi aprovado com média de " + media );
} else {
    (media <= 9,5) 
    alert ("O aluno " + aluno + " foi reprovado com média de " + media );
}

var repetir=prompt( "Deseja calcular a média de outro um aluno ? Digite S para sim ou N para não: ");
} while(repetir === "S"  || repetir === "s" );


for(var i=0; i<todosalunos.length; i++){
    if(todasnotas[i]>=9.5){
        document.write(todosalunos[i]+" está aprovado(a) com média "+todasnotas[i]+"<br>");
    }
   }

