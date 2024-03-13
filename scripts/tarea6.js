
// Caso 1
function ejecutarCasoUno() {
    var edad = 18;

    if (edad >= 18) {
        document.getElementById("resultadoEdad").innerText = "Mayor de edad";
    } else {
        document.getElementById("resultadoEdad").innerText = "Menor de edad";
    }
}

// Caso 2
function ejecutarCasoDos() {
    var mes = 3;
    var nombreMes;

    switch (mes) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        default:
            nombreMes = "Mes no válido";
    }
    document.getElementById("resultadoMes").innerText = "El mes ingresado es: " + nombreMes;
}

// caso 3
function ejecutarCasoTres() {
    var primerNumero = 10;
    var numero = 15;
    var resultadoSuma = 0;
    try {
        resultadoSuma = primerNumero + segundoNumero;
        document.getElementById("resultadoCasoTres").innerText = "El resultado de la suma es: " + resultadoSuma;
    } catch (error) {
        document.getElementById("resultadoCasoTres").innerText = "Ha ocurrido un error al hacer la suma";
    }
}

// Caso 4 - Objeto Error
function ejecutarCasoCuatro() {
    try {
        var errorPersonalizado = new Error("Este es un error personalizado donde indico el mensaje de salida");
        document.getElementById("resultadoCasoCuatro").innerText = errorPersonalizado.message;
    } catch (error) {
        document.getElementById("resultadoCasoCuatro").innerText = error.message;
    }
}

// Caso 5 - for
// Imprime los números del 1 al 10
function ejecutarCasoCinco() {
    var numerosArray = "Los números del array son: ";
    for (let i = 1; i <= 10; i++) {
        numerosArray += i + " - ";
    }
    document.getElementById("resultadoCasoCinco").innerText = numerosArray.toString();
}

// Caso 6 - while
function ejecutarCasoSeis() {
    let contador = 1;
    while (contador < 5) {
        console.log(contador);
        contador++;
    }
    document.getElementById("resultadoCasoSeis").innerText = "El contador se detuvo en: " + contador;
}

// Caso 7 - do...while
function ejecutarCasoSiete() {
    let contador = 1;
    do {
        contador++;
    } while (contador < 5);

    document.getElementById("resultadoCasoSiete").innerText = "El contador se detuvo en: " + contador;
}

// Caso 8 - Definir y llamar funciones
// Definición
function llamarFuncion(nombre) {
    document.getElementById("resultadoCasoOcho").innerText = "Hola " + nombre;
}

// Caso 9 - Asignación y comparación
function ejecutarCasoNueve() {
    var primerNumero = 10;
    var segundoNumero = "10";

    if (primerNumero == segundoNumero) {
        document.getElementById("resultadoCasoNueve").innerText = "== devuelve true\n";
    }

    if (primerNumero === segundoNumero) {
        document.getElementById("resultadoCasoNueve").innerText += "=== devuelve true\n";
    } else {
        document.getElementById("resultadoCasoNueve").innerText += "=== devuelve false\n";
    }
}

// Caso 10 - Operadores aritméticos
function ejecutarCasoDiez() {
    var primerNumero = 10;
    var segundoNumero = 5;

    document.getElementById("resultadoCasoDiez").innerText += "El resultado de la suma es " + (primerNumero + segundoNumero);
    document.getElementById("resultadoCasoDiez").innerText += "\nEl resultado de la resta es " + (primerNumero - segundoNumero);
    document.getElementById("resultadoCasoDiez").innerText += "\nEl resultado de la multiplicación es " + (primerNumero * segundoNumero);
    document.getElementById("resultadoCasoDiez").innerText += "\nEl resultado de la diviisón es " + (primerNumero / segundoNumero);
    document.getElementById("resultadoCasoDiez").innerText += "\nEl resultado del módulo es " + (primerNumero % segundoNumero);

}

// Números y fechas 
// Caso 11 - Objeto Number
function ejecutarCasoOnce() {
    var factorUno = "a";
    var factorDos = "18";
    
    if (Number.isNaN(factorUno)) {
        document.getElementById("resultadoCasoOnce").innerText += "El valor " + factorUno + " es número\n";
    } else {
        document.getElementById("resultadoCasoOnce").innerText += "El valor " + factorUno + " no es número\n";
    }

    if (Number.isNaN(factorDos)) {
        document.getElementById("resultadoCasoOnce").innerText += "El valor " + factorDos + " no es número\n";
    } else {
        document.getElementById("resultadoCasoOnce").innerText += "El valor " + factorDos + " es número\n";
    }
}

// Caso 12 - Objeto Math
function ejecutarCasoDoce() {
    var hilera = "";
    hilera = "Math.sqrt(100) -> Raíz cuadrada: " + Math.sqrt(100);
    hilera += "\nMath.pow(10, 2) -> Potencia: " + Math.pow(10, 2);
    hilera += "\nMath.abs(-25) -> Valor absoluto: " + Math.abs(-25);
    hilera += "\nMath.max(100, 25) -> Número mayor entre dos valores: " + Math.max(100, 25);
    hilera += "\nMath.min(60, 12) -> Número menos entre dos valores: " + Math.min(60, 12);

    document.getElementById("resultadoCasoDoce").innerText = hilera;
}

// Caso 13 - Objeto Date
function ejecutarCasoTrece() {
    var hilera = "";
    var fechaActual = new Date();

    hilera += "La fecha actual es: " + fechaActual;
    hilera += "\nEl año actual es: " + fechaActual.getFullYear();
    hilera += "\nEl mes actual es: " + (fechaActual.getMonth() + 1);
    hilera += "\nEl día del mes actual es: " + fechaActual.getDate();

    document.getElementById("resultadoCasoTrece").innerText = hilera;
}

// Formateo de texto
// Caso 14 - Cadenas literales
function ejecutarCasoCatorce() {
    var nombre = "Keilyn";
    var universidad = "UTN";

    document.getElementById("resultadoCasoCatorce").innerText = `Mi nombre es ${nombre} y estudio en la ${universidad}`;
}

// Caso 15 - Objeto String
function ejecutarCasoQuince() {
    var mensaje = new String("Hola mundo");
    var hilera = "";

    hilera += "Longitud de la cadena 'Hola mundo': " + mensaje.length;
    hilera += "\nCaracter de la posición 2 de la cadena 'Hola mundo': " + mensaje.charAt(2);
    hilera += "\nConvertir la cadena 'Hola mundo' a minúscula: " + mensaje.toLowerCase();
    hilera += "\nConvertir la cadena 'Hola mundo' a mayúscula: " + mensaje.toUpperCase();
    hilera += "\nExisten más funciones con el objeto String";

    document.getElementById("resultadoCasoQuince").innerText = hilera;
}

// Colecciones indexadas
// Caso 16 - Arreglos
function ejecutarCasoDieciseis() {
    var array = [10, 27, 22, 18, 2];

    var hilera = "Elemento en la posición 2 del arreglo [10, 27, 22, 18, 2]: " + array[2];
    hilera += "\nTamaño del arreglo [10, 27, 22, 18, 2]: " + array.length;

    document.getElementById("resultadoCasoDieciseis").innerText = hilera;
}

// Caso 17 - Arreglos tipados
function ejecutarCasoDiecisiete() {
    var arreglo = new Int8Array(8);
    arreglo[0] = 1;
    arreglo[1] = 2;
    arreglo[2] = 3;

    var hilera = "Elemento en la posición 1: " + arreglo[1];
    hilera += "\nElemento en la posición 5: " + arreglo[5];

    document.getElementById("resultadoCasoDiecisiete").innerText = hilera;
}

// DOM
// Caso 18 - Selectores
function ejecutarCasoDieciocho() {
    document.getElementById("rojo").style.color = "red";
    document.getElementsByTagName("span")[0].style.color = "purple";
    document.getElementsByClassName("amarillo")[0].style.color = "yellow";
    document.querySelectorAll('.caja #verde')[0].style.color = "green";
    var longitud = document.getElementById("caja").getElementsByTagName("p").length;

    document.getElementById("cantidadElementos").innerHTML += longitud;
}
