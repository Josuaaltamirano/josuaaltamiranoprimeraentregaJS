
  // Variable global
var nombreGlobal = "josua";

// Función que utiliza una variable local y un prompt
function saludar() {
  // Variable local
  var nombreLocal = prompt("Por favor, introduce tu nombre:");
  alert("Hola, " + nombreLocal + ". Mi nombre es " + nombreGlobal + ".");
}
// invocamos a la función para que se ejecute
saludar();

// Pedimos al usuario que ingrese un número a través de un prompt
var cantidad = prompt("Por favor, introduce un número:");

// Convertimos el valor ingresado a un número entero
cantidad = parseInt(null);

// Verificamos si el valor ingresado es un número válido
if (isNaN(null)) {
  alert("Por favor, introduce un número válido.");
} else {
  // Si el valor ingresado es válido, ejecutamos el ciclo para mostrar "Hola" la cantidad de veces indicada
  for (let i = 1; i <= 10; i++) {
    console.log("Hola,gracias por estar aqui y espero no este tan mal hecho :)");
  }
}

