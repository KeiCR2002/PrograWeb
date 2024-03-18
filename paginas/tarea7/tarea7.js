function convertirFahrenheit() {
    var temperatura = document.getElementById("txtGradosCelsius").value;
    var resultado;

    if (isNaN(temperatura)) {
        resultado = "Solo puede ingresar números en el campo de temperatura";
    } else {
        var temperaturaFahrenheit = (temperatura * (9/5)) + 32;
        resultado = `La temperatura es de ${ temperaturaFahrenheit }°F`;
    }

    document.getElementById("resultadoTemperatura").innerText = resultado;
}

function convertirKelvin() {
    var temperatura = document.getElementById("txtGradosCelsius").value;
    var resultado;

    if (isNaN(temperatura)) {
        resultado = "Solo puede ingresar números en el campo de temperatura";
    } else {
        var temperaturaKelvin = Number(temperatura) + 273.15;
        resultado = `La temperatura es de ${ temperaturaKelvin }°F`;
    }

    document.getElementById("resultadoTemperatura").innerText = resultado;
}
function convertirMillas(){
    var kilometros = document.getElementById("txtKilometros").value;
    var resultado;

    if(isNaN(kilometros)){
        resultado = "Solo puede ingresar números en el campo de kilometros";
    }else{
        var millas = Number(kilometros) * 0.621371;
        resultado = "La distancia es de " + millas +" millas";
    }
    document.getElementById("resultadoDistancia").innerText = resultado;
}
function convertirMetros(){
    var kilometros = document.getElementById("txtKilometros").value;
    var resultado;

    if(isNaN(kilometros)){
        resultado = "Solo puede ingresar números en el campo de kilometros";
    }else{
        var metros = Number(kilometros) * 1000;
        resultado = "La distancia es de " + metros +"metros";
    }
    document.getElementById("resultadoDistancia").innerText = resultado;
}
function calcularIMC(){
    var peso = document.getElementById("txtPeso").value;
    var altura = document.getElementById("txtAltura").value;
    var resultado;

    if(isNaN(peso) && isNaN(altura)){
        resultado = "Solo se pueden ingresar números en los campos de peso y altura"
    }else{
        if(peso > 0 && altura > 0){
             resultado =`El IMC es de ${(peso/ Math.pow(altura,2)).toFixed(2)}`;
        }
        else{
            resultado = "El peso y la altura deben ser mayor a 0 ";
        }
    }
    document.getElementById("resultadoIMC").innerText = resultado;;
}