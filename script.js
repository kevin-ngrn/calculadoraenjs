let nombre=prompt('¿Cual es tu nombre?');
alert('Bienvenido a Calculando con JS' + ' ' + nombre);

let y = 1;
do{

let opcion=prompt('¿Que tipo de calculo deseas realizar' + ' ' +nombre+ '? \n1 - Calculadora basica \n2 - Porcentaje de un numero \n3 - Perimetro de una figura geometrica')

    switch (opcion){
    case '1':
        let primerDigito = prompt('Primer digito');
        let operador = prompt('Operador: \n+ \n- \n* \n/');
        let segundoDigito = prompt('Segundo digito');

        switch(operador){
            case '+': let resultadoSuma = parseFloat(primerDigito) + parseFloat(segundoDigito);
            alert(`El resultado de ${primerDigito} + ${segundoDigito} es ${resultadoSuma}`);
            break;
            case '-': let resultadoResta = parseFloat(primerDigito) - parseFloat(segundoDigito);
            alert(`El resultado de ${primerDigito} - ${segundoDigito} es ${resultadoResta}`);
            break;
            case '*': let resultadoMultiplicacion = parseFloat(primerDigito) * parseFloat(segundoDigito);
            alert(`El resultado de ${primerDigito} * ${segundoDigito} es ${resultadoMultiplicacion}`);
            break;
            case '/': let resultadoDivision = parseFloat(primerDigito) / parseFloat(segundoDigito);
            alert(`El resultado de ${primerDigito} / ${segundoDigito} es ${resultadoDivision}`);
            break;}
    break;
    case '2':            
            function calcularPorcentaje(porcentaje, numero){
                let resultado = numero/100*porcentaje;
                return resultado};
            
            let porcentaje = parseFloat(prompt('Elige el porcentaje'));
            let numero = parseFloat(prompt('Elige el valor numerico'));

            alert(`El ${porcentaje}% de ${numero} es ${calcularPorcentaje(porcentaje, numero)}`);
    break;
    case '3':
        let figura = prompt(`Selecciona la figura de la cual deseas saber el perimetro, ${nombre} \n1 - Cuadrado \n2 - Triangulo \n3 - Circulo`)
        switch(figura){
            case '1':
                let ladoCuadrado=parseFloat(prompt('Proporciona la medida de uno de los lados del cuadrado'));
                let perimetroCuadrado=(ladoCuadrado * 4);
                alert('El perimetro del cuadrado es' + ' ' + perimetroCuadrado);
                break;
            case '2':
                let ladoTriangulo=parseFloat(prompt('Proporciona la medida de uno de los lados del triangulo'));
                let perimetroTriangulo=(ladoTriangulo * 3);
                alert('El perimetro del triangulo es' + ' ' + perimetroTriangulo);
                break;
            case '3':
                let datoCirculo = prompt('Indica que dato posees para calcular el perimetro del circulo: \n1 - Radio \n2 - Diametro')
                if (datoCirculo==1){
                    let perimetroRadio = parseFloat(prompt('Indica el valor del radio'));
                    let resultadoRadio = (perimetroRadio * 2) * 3.14;
                    alert(`El perimetro del circulo es ${resultadoRadio}`);
                }else if (datoCirculo==2){
                    let perimetroDiametro = parseFloat(prompt('Indica el valor del diametro'))
                    let resultadoDiametro = perimetroDiametro *3.14;
                    alert (`El perimetro del circulo es ${resultadoDiametro}`);
                }else{
                    alert('Opcion incorrecta');
                }break;
        }
    } y++
} while(y <= 10)














