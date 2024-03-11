
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

//
