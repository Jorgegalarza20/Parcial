const numeros = [];

function agregarNumero() { // compureba si el valor esta vacio
  const numInput = document.getElementById("numInput").value;

  if (numInput !== "") {
    numeros.push(parseInt(numInput));
    document.getElementById("numerosIngresados").innerHTML += "<li>" + numInput+ "</li>" ;
    document.getElementById("numInput").value = "";
    
  }
}

function sumar() {
  let suma = 0;
for (let index = 0; index < numeros.length; index++) {
  suma += numeros[index];
}
  let maximo = Math.max.apply(null, numeros);
  let minimo = Math.min.apply(null, numeros);
let promedio = suma / numeros.length

  document.getElementById("resultado").innerText = "La suma de los números es: " + suma;
  document.getElementById("promedio").innerText = "el promedio de los numeros es: " + promedio;
  document.getElementById("maximo").innerText = "El valor máximo es: " + maximo;
  document.getElementById("minimo").innerText = "El valor mínimo es: " + minimo;
}