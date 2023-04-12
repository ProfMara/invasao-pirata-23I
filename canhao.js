//cria um protótipo de objeto
class Canhao{
    //constructor define o que acontece quando o objeto é criado
    constructor(x,y,largura, altura){
        //define que está parado
        var parado = {isStatic:true};
        //atribui um corpo ao objeto da classe CANHAO
        this.body = Bodies.rectangle(x,y,largura, altura, parado);
        World.add(world, this.body);
        //atribui a propriedade imagem
        this.canhaoBaseImg = loadImage("base.png");
        this.canhaoImg = loadImage("canhao.png");
        //atribui a propriedade largura e a propriedade altura
        this.largura = largura;
        this.altura = altura;

    }
    //método que coloca imagens no corpo invisível
    show(){
        var pos = this.body.position;
        push();
        image(this.canhaoImg, pos.x, pos.y, this.largura, this.altura);
        pop();
        image(this.canhaoBaseImg, 170, 130, 200, 200);

    }

}