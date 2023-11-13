var canvas = new fabric.Canvas("myCanvas");
var x1 = 10;
var y1 = 10;
largura = 30;
altura = 30;
var jogador = "";
var bloco = "";
head1()
function head1() {
    fabric.Image.fromURL("player.png", function(Img) {
        jogador = Img
        jogador.scaleToWidth(150)
        jogador.scaleToHeight(70)
        jogador.set({ top:y1, 
            left:x1 });
            canvas.add(jogador)
    })

}

