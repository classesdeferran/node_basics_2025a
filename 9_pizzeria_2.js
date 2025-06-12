// Mostrar el menú, pero hay que especificar por un parte:
// -- los dos tipos de masa
// Por otra que solo se pueden elegir 4 ingredientes del resto
// 9_pizzeria 2 3 4 5 6
// Ha elegido pizza de espelta con ..., ..., ... y ...
// Precio Total : X€

const ingredientes = require("./ingredientes.js");
// console.log(ingredientes);

if (process.argv.length == 2) {
  // 1 : Mostrar el menú para el cliente
  let menu = "Node's Pizzas\n";
  menu += "=".repeat(menu.length - 1);
  // Mostrar las masas
  menu += "\nNuestras masas (elegir una):";
  menu += `\n1. ${
    ingredientes[0].ingrediente
  } : ${ingredientes[0].precio.toFixed(2)}`;
  menu += `\n2. ${
    ingredientes[1].ingrediente
  } : ${ingredientes[1].precio.toFixed(2)}\n`;
  menu += "\nNuestros ingredientes (elegir cuatro):";
  for (let i = 2; i < ingredientes.length; i++) {
    menu += `\n${i + 1}. ${ingredientes[i].ingrediente} : ${ingredientes[
      i
    ].precio.toFixed(2)}`;
  }
  menu += "\n\n";
  console.log(menu);
}

let precio = 0
let mensaje = "\n\nHas elegido pizza con masa "

for (let i = 2; i < process.argv.length; i++) {
    if (i == 2) mensaje += ingredientes[process.argv[i]-1].ingrediente + " con "
    else if (i > 2 && i < 6) mensaje += `${ingredientes[process.argv[i]-1].ingrediente}, `
    else mensaje += `y ${ingredientes[process.argv[i]-1].ingrediente}.`
    
    precio += ingredientes[process.argv[i]-1].precio
}
mensaje += `\nImporte total : ${precio.toFixed(2)}€\n\n`
console.log(mensaje);

