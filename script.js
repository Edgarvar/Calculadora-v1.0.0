function calcular() {
    var numA = parseFloat( document.getElementById("numeroA").value);
    var numB = parseFloat( document.getElementById("numeroB").value);

    document.getElementById("suma").innerHTML = numA + numB;
    document.getElementById("resta").innerHTML = numA - numB;
    document.getElementById("multiplicacion").innerHTML = numA * numB;
    document.getElementById("division").innerHTML = numA / numB;

    
}