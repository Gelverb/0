//Primero declaramos las variables a utilizar en el
//algoritmo

function operacionesbasicas(){
    
    var a = 0;
    var b = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;
    
    a = parseFloat(prompt("Por favor ingrese el primer valor numerico"));
    b = parseFloat(prompt("Por favor ingrese el segundo valor nuemrico"));
    
    suma = a + b;
    resta = a - b;
    multi = a * b;
    divi = a / b;
    
    alert("El resultado de la suma es: " + suma);
    alert("El resultado de la resta es: " + resta);
    alert("El resultado de la multi es: " + multi);
    alert("El resultado de la divi es: " + divi);
}

function promedio(){
    //El promedio se calcula la cantidad de notas
    //y dividir el resultado de la suma en esta cantidad

    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var nota1 = 0;
    var promedio = 0;

    nota1 = parseFloat(prompt("Por favor ingrese la primera nota"));
    nota2 = parseFloat(prompt("Por favor ingrese la segunda nota"));
    nota3 = parseFloat(prompt("Por favor ingrese la tercera nota"));
    nota4 = parseFloat(prompt("Por favor ingrese la cuarta nota"));
    nota5 = parseFloat(prompt("Por favor ingrese la quinta nota"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (promedio <= 2.9) {
        alert("REPROBO, su promedio es de: " + promedio);
    } else {
        alert("APROBO, su promedio es de: " + promedio)
    }

    function edad(){
        var a = 0;
        var b = 0;
        var c = 0;

        a = parseFloat(prompt("Por favor ingrese edad"));
        b = parseFloat(prompt("Por favor ingrese el año actual"));

        c = b - a;

        alert("El año en que usted ancio es: " + c)
    }

}