///7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
///Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
    var nome = prompt("Qual o nome do aluno?");
    var numero1 = parseInt(prompt("Insira a primeira nota"));
    var numero2 = parseInt(prompt("Insira a segunda nota"));
    var numero3 = parseInt(prompt("Insira a terceira nota"));
    var numero4 = parseInt(prompt("Insira a quarta nota"));
    var numero5 = parseInt(prompt("Insira a quinta nota"));
    var numero6 = parseInt(prompt("Insira a sexta nota"));
   
     if (numero1 >= 0 && numero1 <= 10 && numero2 >= 0 && numero2 <= 10 && numero3 >= 0 && numero3 <=10 && numero4 >= 0 && numero4 <= 10 && numero5 >= 0 && numero5 <= 10 && numero6 >= 0 && numero6 <= 10 ) {
   media = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6;
    alert ( " A média do aluno " + nome + " foi de: " + media ); 
}

else {
    while(numero1 < 0 || numero1 > 10 || numero2 < 0 || numero2 > 10 || numero3 < 0 || numero3 > 10 || numero4 < 0 && numero4 > 10 || numero5 < 0 || numero5 > 10 || numero6 < 0 || numero6 > 10 ) {
        
        alert("Digite numeros de 0 a 10, repita o processo");

    var numero1 = parseInt(prompt("Insira a primeira nota"));
    var numero2 = parseInt(prompt("Insira a segunda nota"));
    var numero3 = parseInt(prompt("Insira a terceira nota"));
    var numero4 = parseInt(prompt("Insira a quarta nota"));
    var numero5 = parseInt(prompt("Insira a quinta nota"));
    var numero6 = parseInt(prompt("Insira a sexta nota"));
    
    }
}
    