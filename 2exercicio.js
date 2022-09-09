///2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

var contagem = 30

while (contagem > 0) {
    var textcontagem = "💣" + "Contagem em " + contagem + "💣" +"<br> <br>";
    document.write(textcontagem);
    contagem = contagem - 1;
}

document.write("Explosão pluuuuuuuuuuuum ");