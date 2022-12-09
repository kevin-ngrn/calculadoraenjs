
/* FORM PARA INTERACTUAR CON EL USUARIO */

const divUsuario = document.querySelector('.divUsuario'),
    divRegistro = document.querySelector('.divRegistro'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    edadUsuario = document.getElementById('edadUsuario'),
    emailUsuario = document.getElementById('emailUsuario'),
    botonRegistro = document.getElementById('botonRegistro'),
    usuarioDom = document.querySelector('.usuarioDom'),
    formVacio = document.querySelector('.formVacio');

/* EVENTO DEL FORM */

botonRegistro.addEventListener('click', () => {
    if(nombreUsuario.value == ""){
        formVacio.innerHTML = "Olvidaste tu nombre!";
        nombreUsuario.focus();
    }else if(edadUsuario.value == ""){
        formVacio.innerHTML = "Olvidaste tu edad!";
        edadUsuario.focus();
    }else if(emailUsuario.value == ""){
        formVacio.innerHTML = "Olvidaste tu email!";
        emailUsuario.focus();
    }else{
        let usuario = {
            nombre: nombreUsuario.value,
            edad: edadUsuario.value,
            email: emailUsuario.value};
    localStorage.setItem('usuario', JSON.stringify(usuario));
    divUsuario.style.display = "none";
    divRegistro.style.display = "none";
    formVacio.style.display = "none";
    let usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
    usuarioDom.innerHTML = `Estudiante: ${usuarioStorage.nombre}, ${usuarioStorage.edad} años`;
    swal({
    title: "Desafios Semanales",
    text: `Deseas recibir desafios matematicos a ${emailUsuario.value}, ${nombreUsuario.value}?`,
    buttons: ["No, gracias!","Si, quiero!"],
    }).then((willDelete) => {
        if (willDelete) {
        swal("Genial, recuerda que los desafios se adaptan según tu edad!",{
            icon: "success",});
        }else {
        swal({
            buttons: false,
            title: `Bienvenido! ${nombreUsuario.value}`,
            timer: 1000
        });
    }});
}});



/* CALCULADORA BASICA */

const displayValorAnterior = document.getElementById('valor-anterior'),
    displayValorActual = document.getElementById('valor-actual'),
    botonesNumeros = document.querySelectorAll('.numero'),
    botonesOperadores = document.querySelectorAll('.operador'),
    botonBorrarTodo = document.querySelector('.col-2'),
    botonborrar = document.querySelector('.borrar');


const display = new Display (displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))});

botonesOperadores.forEach(boton=>{
    boton.addEventListener('click', () => display.computar(boton.value))});

botonBorrarTodo.addEventListener('click', () => display.borrarTodo());

botonborrar.addEventListener('click', () => display.borrar());



/* CALCULAR PORCENTAJE DE UN NUMERO  */

const botonCalcular = document.querySelector('.botonCalcular');
const resultado = document.querySelector('.resultado');

botonCalcular.addEventListener('click', () => {capturarDatos()});

function capturarDatos(){
    const inputNumeroPorcentaje = document.querySelector('.numeroPorcentaje').value;
    const inputPorcentaje = document.querySelector('.porcentaje').value
    const resultadosParseados = parseFloat(inputNumeroPorcentaje)/100 * parseFloat(inputPorcentaje)
    return resultado.innerHTML = `El ${inputPorcentaje}% de ${inputNumeroPorcentaje} es ${resultadosParseados}`};




/* AREA O PERIMETRO DE FIGURAS GEOMETRICAS */

    /* BOTONES */
const btnCalcularCuadrado = document.querySelector('.areaPerCuadrado'),
    btnCalcularRectangulo = document.querySelector('.areaPerRectangulo'),
    btnCalcularCirculo = document.querySelector('.areaPerCirculo');

    /* INPUTS */
const inputCuadradoL = document.querySelector('.inputCuadradoL'),
    inputRectanguloL = document.querySelector('.inputRectanguloL'),
    inputRectanguloA = document.querySelector('.inputRectanguloA'),
    inputCirculoR = document.querySelector('.inputCirculoR');

    /* RESULTADOS DOM */
const aResultadoCuadrado = document.querySelector('.aResultadoCuadrado'),
    pResultadoCuadrado = document.querySelector('.pResultadoCuadrado'),
    aResultadoRectangulo = document.querySelector('.aResultadoRectangulo'),
    pResultadoRectangulo = document.querySelector('.pResultadoRectangulo'),
    aResultadoCirculo = document.querySelector('.aResultadoCirculo'),
    pResultadoCirculo = document.querySelector('.pResultadoCirculo'),
    rResultadoCirculo = document.querySelector('.rResultadoCirculo');


    /* EVENTOS RESULTADOS */
btnCalcularCuadrado.addEventListener('click', () => {
    const ladoCuadrado = parseFloat(inputCuadradoL.value),
        pyaCuadrado = new Cuadrado (ladoCuadrado);
    pResultadoCuadrado.innerHTML = `Perimetro = ${pyaCuadrado.perimetro} cm`;
    aResultadoCuadrado.innerHTML = `Area = ${pyaCuadrado.area} cm`;
});

btnCalcularRectangulo.addEventListener('click', () => {
    const ladoRectangulo = parseFloat(inputRectanguloL.value),
        altoRectangulo = parseFloat(inputRectanguloA.value),
        pyaRectangulo = new Rectangulo (ladoRectangulo, altoRectangulo);
    pResultadoRectangulo.innerHTML = `Perimetro = ${pyaRectangulo.perimetro} cm`;
    aResultadoRectangulo.innerHTML = `Area = ${pyaRectangulo.area} cm`;
});

btnCalcularCirculo.addEventListener('click', ()=>{
    const radio = parseFloat(inputCirculoR.value),
        pyaCirculo = new Circulo (radio);
    aResultadoCirculo.innerHTML = `Area = ${pyaCirculo.area} cm`;
    pResultadoCirculo.innerHTML = `Perimetro = ${pyaCirculo.perimetro} cm`;
    rResultadoCirculo.innerHTML = `Diametro = ${pyaCirculo.diametro} cm`
})



/* FUNCIONES TRIGONOMETRICAS */

    /* INPUTS */
const inputHip = document.querySelector('.inputHip')
    inputOpu = document.querySelector('.inputOpu');
    inputAdy = document.querySelector('.inputAdy')
const btnCalcularT = document.querySelector('.btnCalcularT');
const msjSinInput = document.querySelector('.txtAngulo')

    /* RESULTADOS */
const sinP = document.querySelector('.sinP')
    cosP = document.querySelector('.cosP')
    tanP = document.querySelector('.tanP')
    arcoSinP = document.querySelector('.arcoSinP')
    arcoCosP = document.querySelector('.arcoCosP')
    arcoTanP = document.querySelector('.arcoTanP');

const hipFigura = document.querySelector('.hipT')
    catOpuFigura = document.querySelector('.catOpuT')
    catAdyFigura = document.querySelector('.catAdyT');


/* EVENTO RESULTADOS FUNCIONES TRIGONOMETRICAS */
btnCalcularT.addEventListener('click', () => {
    if(inputHip.value == ""){
        msjSinInput.innerHTML = "Debes proporcionar la hipotenusa de tu triángulo rectángulo";
        inputHip.focus();
    }else if(inputOpu.value == ""){
        msjSinInput.innerHTML = "Debes proporcionar el cateto opuesto de tu triángulo rectángulo";
        inputOpu.focus();
    }else if(inputAdy.value == ""){
        msjSinInput.innerHTML = "Debes proporcionar el cateto adyacente de tu triángulo rectángulo";
        inputAdy.focus();
    }else{
    let inputs = [inputHip.value, inputOpu.value, inputAdy.value];
    for (let i = 0; i < inputs.length; i++){
        if (i == ""){continue}
    let sin = (inputs [1] / inputs [0]);
    let cos = (inputs[2] / inputs[0]);
    let tan = (inputs[1] / inputs[2]);
    let arcoSin = Math.asin (sin) / (Math.PI / 180);
    let arcoCos = Math.acos (cos) / (Math.PI / 180);
    let arcoTan = Math.atan (tan) / (Math.PI / 180);
    sinP.innerHTML = `Seno: ${sin}`;
    cosP.innerHTML = `Coseno: ${cos}`;
    tanP.innerHTML = `Tangente: ${tan}`;
    arcoSinP.innerHTML = `Arcoseno: ${arcoSin}º`;
    arcoCosP.innerHTML = `Arcocoseno: ${arcoCos}º`;
    arcoTanP.innerHTML = `Arcotangente: ${arcoTan}º`;}
    hipFigura.innerHTML = `Hipotenusa = ${inputHip.value} cm`;
    catOpuFigura.innerHTML = `Cat. Opuesto = ${inputOpu.value} cm`;
    catAdyFigura.innerHTML = `Cat. Adyacente = ${inputAdy.value} cm`;
}});


/* FUNCION PARA MOSTRAR EL BOTON AL SCROLLEAR */
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.containerUp')
        .classList.add('mostrarBoton');
    }else{
        document.querySelector('.containerUp')
        .classList.remove('mostrarBoton');
    }
}

/* EVENTO DEL BOTON PARA IR ARRIBA */
document.querySelector('.containerUp').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});









/* CODIGO CON PROMPTS Y ALERTS YA CORREGIDO QUE ADAPTE*/



/* const nombre=prompt('¿Cual es tu nombre?');
alert(`Bienvenido a "Introduccion a las matematicas" ${nombre}`); 

let y = 1;
do{
    let opcion=prompt('¿Que tipo de calculo deseas realizar' + ' ' +nombre+ '? \n1 - Calculadora basica \n2 - Porcentaje de un numero \n3 - Perimetro de una figura geometrica \n4 - Funciones trigonometricas')
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
            let figura = prompt(`Selecciona la figura de la cual deseas saber el area o el perimetro, ${nombre} \n1 - Cuadrado \n2 - Rectangulo \n3 - Circulo`)
            switch(figura){
                case '1':
                    let cuadradoAreaPer = prompt('Cuadrado: \n1 - Area \n2 - Perimetro')
                    if (cuadradoAreaPer==1){
                        let ladoCuadrado = parseFloat(prompt('Proporciona uno de los lados del cuadrado'))
                        let areaCuadrado = new Cuadrado (ladoCuadrado);
                        alert(`El area de tu cuadrado es ${areaCuadrado.area}`)
                    }else if (cuadradoAreaPer==2){
                        let ladoCuadrado=parseFloat(prompt('Proporciona la medida de uno de los lados del cuadrado'));
                        let perimetroCuadrado=(ladoCuadrado * 4);
                        alert(`El perimetro del cuadrado es ${perimetroCuadrado}`);
                    }else{
                        alert(`No has elegido una opcion valida, vuelve a intentarlo ${nombre}`);
                    }break;
                case '2':
                    let rectanguloAreaPer = prompt('Rectangulo: \n1 - Area \n2 - Perimetro');
                    if (rectanguloAreaPer == 1){
                        let alto = parseFloat(prompt('Proporciona el alto de tu rectangulo'));
                        let ancho = parseFloat(prompt('Proporciona el ancho de tu triangulo'));
                        let areaRectangulo = new Rectangulo (alto, ancho)
                        alert(`El area de tu rectangulo es ${areaRectangulo.area}`);
                    }else if (rectanguloAreaPer == 2){
                        let alto = parseFloat(prompt('Proporciona el alto de tu rectangulo'));
                        let ancho = parseFloat(prompt('Proporciona el ancho de tu triangulo'));
                        alert(`El perimetro de tu rectangulo es ${alto + ancho * 2}`);
                    }else{
                        alert(`No has elegido una opcion valida, vuelve a intentarlo ${nombre}`);
                    }break;
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
                    }}break;
        case '4':
            let trianguloDado = prompt(`Proporciona el largo de: hipotenusa, cateto opuesto y cateto adyacente en ese orden separados por una barra (/)`);
            let medidas = trianguloDado.split('/')
            let tipoDeFuncion = prompt(`Selecciona el tipo de funcion trigonometrica que necesites, ${nombre} \n1 - Sin \n2 - Cos \n3 - Tan \n4 - Sin-1 \n5 - Cos-1 \n6 - Tan-1`)
            switch(tipoDeFuncion){
                case '1': 
                        let sin = (medidas [1]) / (medidas [0]);
                        alert(`El seno de tu angulo es ${sin}`);
                break;
                case '2':
                        let cos = (medidas [2]) / (medidas [0])
                        alert (`El coseno de tu angulo es ${cos}`);
                break;
                case '3':
                        let tan = (medidas [1]) / (medidas [2]);
                        alert (`La tangente de tu angulo es ${tan}`);
                case '4': 
                        let arcoseno = (medidas [1]) / (medidas [0]);
                        let arcosenoFinal = Math.asin (arcoseno) / (Math.PI / 180);
                        alert(`El arcoseno de tu angulo es ${arcosenoFinal}`);
                break;
                case '5':
                        let arcoCoseno = (medidas [2]) / (medidas [0])
                        let arcoCosenoFinal = Math.acos (arcoCoseno) / (Math.PI / 180);
                        alert (`El arcocoseno de tu angulo es ${arcoCosenoFinal}`);
                break;
                case '6':
                        let arcoTangente = (medidas [1]) / (medidas [2]);
                        let arcoTangenteFinal = Math.atan (arcoTangente) / (Math.PI/ 180);
                        alert (`El arcotangente de tu angulo es ${arcoTangenteFinal}`);
                break;
            }
        } y++
} while(y <= 10)     
 */







