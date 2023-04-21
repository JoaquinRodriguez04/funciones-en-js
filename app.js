// Guía de ejercicios

/* 
Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
que es. 
*/

let ingresar_Dato = true

function tipo_de_dato(ingresar_Dato){
    let mostrar_tipo_de_dato = typeof(ingresar_Dato)
    return mostrar_tipo_de_dato
}

mostrar_x_consola_tipo_de_dato = `el tipo de dato que paso en la variable ingresar_dato es ${tipo_de_dato(ingresar_Dato)}`

console.log(mostrar_x_consola_tipo_de_dato)

/* 
Dado dos números ingresados por el usuario, se pide realizar una función que
devuelve la resta de ambos números. Mostrar el resultado por la consola.
*/

// le pedimos al usuario que introduzca dos numeros para realizar la resta
let number_1 = 20
let number_2 = 30

function resta(number_1,number_2){
    let resta_de_numeros = number_1 - number_2
    let resultado = `la resta de ambos numeros da como resultado: ${resta_de_numeros}`
    return resultado
}

resultadoDeResta =  resta(number_1,number_2)

console.log(resultadoDeResta)

/*
Generar una función que le ingresen por parámetro dos valores distintos en dos
variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
Pasarlo a a y mostrarlos
*/

let a = 220
let b = 4

function intercambioDeValores(a,b){
    let valor_a = b
    let valor_b = a

    nuevos_valores = `los nuevos valores son: \n valor a = ${valor_a} \n valor b = ${valor_b}`

    return nuevos_valores
}

resultado_2 = intercambioDeValores(a,b)

console.log(resultado_2)

/*
Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola.
*/

let figura = 10

function perimetroYSuperficie(figura){
    let perímetro = figura * 4
    let superficie = figura ** 2

    let resultado_3 = `el perimetro de la figura vale ${perímetro} y la superficie ${superficie}`

    return resultado_3
}

perimetroYSuperficieDeFigura = perimetroYSuperficie(figura)

console.log(perimetroYSuperficieDeFigura)

/*
Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius.
*/

let temperatura_fahrenheit = 20

function conversion(temperatura_fahrenheit){
    let conversion_ºF_a_ºC = (temperatura_fahrenheit-32) * 5/9

    let resultado_4 = `la conversion de ${temperatura_fahrenheit} grados ºF da como resultado ${conversion_ºF_a_ºC} grados ºC`

    return resultado_4
}

resultadoDeConversion = conversion(temperatura_fahrenheit)

console.log(resultadoDeConversion)

/*
Realizar una función que calcule el factorial de un número ingresado por el usuario (el
número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
consola.
*/    

let numero = 3

function calcularFactorial(numero){
    
    let resultadoFactIncorrecto = []

    if(numero > 10){
        resultadoFactIncorrecto += "el valor ingresado no puede ser mayor a 10";
    }
    else{
        let numero_Factorial = 1;
        for(let i = 1; i <= numero; i++){
            numero_Factorial *= i;
        }
        let resulNumFact = `el resultado de su numero es: ${numero_Factorial}`;
        return resulNumFact
    }

    return resultadoFactIncorrecto
    
}

resultadoDeFactorial = calcularFactorial(numero)

console.log(resultadoDeFactorial)


/*
Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”
*/

let cadena_de_caracteres = "“Somos o no somos"

function validarSiEsPalíndromo(cadena_de_caracteres){
    let cadena_original = cadena_de_caracteres.toLowerCase();

    let cadena_a_validar = cadena_de_caracteres.split("").reverse().join("");

    return cadena_original === cadena_a_validar;

}

// primero se transforman todos los caracteres a minuscula para que no haya problemas: para ello utilizamos el .toLowerCase()

// segundo retornamos esa variable que pasamos por la funcion(cadena_de_caracteres) y lo igualamos estrictamente(===) a: la variable cadena_de_caracteres.split para separar cada letra como si fuese un elemento, .reverese() para invertir el orden de las letras y .join("") para eliminar cada espacio y unir nuevamente cada letra

resultado_de_validacion = validarSiEsPalíndromo(cadena_de_caracteres)

function esONoEsUnpalíndromo(resultado_de_validacion){
    let validación = []
    
    if(resultado_de_validacion === true){
        validación += "la cadena de caracteres es un palíndromo"
    }
    else if(resultado_de_validacion === false){
        validación += "la cadena de caracteres no es un palíndromo"
    }
    return validación;
}

resultado_de_validacion_2 = esONoEsUnpalíndromo(resultado_de_validacion)

console.log(resultado_de_validacion_2)


Strings = "Alaw y ala"

function valido(Strings){
    // primero se transforman todos los caracteres a minuscula para que no haya problemas: para ello utilizamos el .toLowerCase()
    Strings = Strings.toLowerCase();

    // despues separamos individualmente cada letra con .split("")
    let Strings_split = Strings.split("");

    // despues invertimos el orden individualmente de cada letra con .reverse()
    let Strings_reverse = Strings.split("").reverse();

     // por ultimo eliminamos los espacios entre cada letra y se unen ambas palabras con .join("")
    let Strings_join = Strings.split("").reverse().join("");

    return Strings_join
}

// console.log(valido(Strings))

/*
Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.
*/

let string_1 = "hola, me llamo Joaquin Rodriguez"

function mayuscAndMinusc(string_1){
    let minuscula = string_1.toLowerCase();
    let mayuscula = string_1.toUpperCase();

    let mostrar_Ambos = `texto en minuscula: ${minuscula} \ntexto en mayuscula: ${mayuscula}`;

    return mostrar_Ambos;
}   

let resultado_de_string_1 = mayuscAndMinusc(string_1);

console.log(resultado_de_string_1);


/*
Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

notaAlumno = 3

function calificación(notaAlumno){

    let calificaciónResultante = []

    if(notaAlumno <= 3){
        calificaciónResultante += "Muy deficiente"
    }
    else if(notaAlumno >= 3 && notaAlumno <= 5){
        calificaciónResultante += "Insuficiente"
    }
    else if(notaAlumno >= 5 && notaAlumno <= 6){
        calificaciónResultante += "Suficiente"
    }
    else if(notaAlumno >= 6 && notaAlumno <= 7){
        calificaciónResultante += "Bien"
    }
    else if(notaAlumno >= 7 && notaAlumno <= 9){
        calificaciónResultante += "Notable"
    }
    else if(notaAlumno >= 9 && notaAlumno <= 10){
        calificaciónResultante += "Sobresaliente"
    }
    let nota = `la calificacion resultante es: ${calificaciónResultante}`
    
    return nota
}

let resultado_notaAlumno = calificación(notaAlumno)

console.log(resultado_notaAlumno)

/*
Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.
*/

let mes = 4

function diasDeMes(mes){
    
    let dias_meses = []

    if(mes % 2 === 1){
        dias_meses += "tiene 31 dias"
    }
    else if(mes === 2){
        dias_meses += "tiene 28 dias"
    }
    else if(mes % 2 === 0){
        dias_meses += "tiene 30 dias"
    }
    
    let elMesTiene = `el mes tiene ${dias_meses}`

    return elMesTiene
}

let resultado_mes = diasDeMes(mes)

console.log(resultado_mes)


/*
Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
*/

let numero_usuario = 10

function numeroPiramidal(numero_usuario){

    let numero_incorrecto = []
    let piramide = []
    
    if(numero_usuario <= 10){ 
        for(let i = 1; i <= numero_usuario; i++){
            let piso = ""
            for(let i2 = 1; i2 <= i; i2++){
                piso += i2;
            }
            piramide += piso + "\n"
        }
        return piramide;
    }
    else if(numero_usuario > 10){
        numero_incorrecto += "el numero no puede ser mayor a 10"
    }

    return numero_incorrecto;
}

console.log(numeroPiramidal(numero_usuario))


/*
Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola
*/

let bultos_stock = 40
let cantidad_en_caja = 15

function calculoStock(bultos_stock,cantidad_en_caja){
    let calculo = bultos_stock / cantidad_en_caja
    let resto = bultos_stock % cantidad_en_caja
    let calculoFloor = Math.floor(calculo)
    let resultado_calculoStock = `se pueden completar ${calculoFloor} cajas y quedarian ${resto} bultos sueltos`

    return resultado_calculoStock
}

console.log(calculoStock(bultos_stock,cantidad_en_caja))


/*
Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola.
*/

let codigo = "focus"

function descuentos(codigo){
    let descuentoObtenido = []
    if(codigo == "fiesta"){
        descuentoObtenido += "el descuento es del 5%"
    }else if(codigo == "focus"){
        descuentoObtenido += "el descuento es del 10%"
    }
    return descuentoObtenido
}

let resultadoCodigo = descuentos(codigo)

console.log(resultadoCodigo)