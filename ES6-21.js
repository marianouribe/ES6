class Rectangulo{
    constructor(base,altura) {
        this.base = base;
        this.altura = altura;
    }

    calcArea(){
        return this.base * this.altura;
    }
}

var r = new Rectangulo(5,10);
console.log(r.calcArea());