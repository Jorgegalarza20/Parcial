var numeros = [];

function validateInput() {
  var numInput = document.getElementById("numInput").value;
  var regex = /^[0-9]$/;

  if (!regex.test(numInput)) {
    alert("Por favor, ingresa solo un número.");
    document.getElementById("numInput").value = "";
  }
}

function agregarNumero() {
  var numInput = document.getElementById("numInput").value;

  if (numInput !== "") {
    numeros.push(parseInt(numInput));
    document.getElementById("numerosIngresados").innerHTML = "Números ingresados:<br>" + numeros.join("<br>");
    document.getElementById("numInput").value = "";
    
    if (numeros.length === 4) {
      document.getElementById("numInput").disabled = true;
    }
  }
}

function sumar() {
  if (numeros.length === 4) {
    var suma = numeros.reduce(function(acc, num) {
      return acc + num;
    }, 0);

    var maximo = Math.max.apply(null, numeros);
    var minimo = Math.min.apply(null, numeros);

    document.getElementById("resultado").innerText = "La suma de los números es: " + suma;
    document.getElementById("maximo").innerText = "El valor máximo es: " + maximo;
    document.getElementById("minimo").innerText = "El valor mínimo es: " + minimo;
  } else {
    alert("Por favor, ingresa 4 números antes de calcular la suma.");
  }
}