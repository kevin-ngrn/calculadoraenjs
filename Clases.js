class Calculadora{
    sumar (num1, num2){
        return(num1 + num2);
    }
    restar (num1, num2){
        return(num1 - num2);
    }
    dividir (num1, num2){
        return(num1 / num2);
    }
    multiplicar (num1, num2){
        return(num1 * num2);
    }
}


class Cuadrado{
    constructor(lado){
        this.lado = parseFloat(lado)
    }
    get area(){
        return this.calculoArea();
    }
    calculoArea(){
        return this.lado * this.lado;
    }get perimetro(){
        return this.lado * 4;
    }
}

class Rectangulo{
    constructor(alto, ancho){
        this.alto = parseFloat(alto)
        this.ancho = parseFloat(ancho)
    }
    get area(){
        return this.calculoArea();
    }
    calculoArea(){
        return this.alto * this.ancho;
    }
    get perimetro(){
        return 2 * (this.alto + this.ancho);
    }
}

class Circulo{
    constructor(radio){
        this.radio = parseFloat(radio)
    }
    get perimetro(){
        return 2 * Math.PI * this.radio
    }
    get area(){
        return Math.PI * (this.radio * this.radio)
    }
}

