// const pizza = [
//     {'nombre' : "Cuatro quesos", 'precio' : 12.75},
//     {'nombre' : "Margarita", 'precio': 10.50},
//     {'nombre' : "Napolitana", 'precio' : 11.20}
// ]

// LECTURA #1

const fs = require("node:fs");

let textoPizzas = fs.readFileSync("pizzas.js", "utf-8");
let jsonPizzas = JSON.parse(textoPizzas);

// console.log(jsonPizzas);
// console.log(jsonPizzas[1]['nombre']);
// console.log(jsonPizzas[1].nombre);

if (process.argv.length == 2) {
  let menu = "Node's pizzas\n";
  menu += "-".repeat(menu.length - 1);

  for (let i = 0; i < jsonPizzas.length; i++) {
    menu += `\n${i + 1}. ${jsonPizzas[i]["nombre"]} a ${
      jsonPizzas[i]["precio"]
    }€`;
  }

  menu += "\n\nElije tu opción :\n";

  console.log(menu);
} else {
  let eleccion = jsonPizzas[process.argv[2] -1]
  console.log(`Has elegido pizza ${eleccion.nombre}. Importe Total: ${eleccion.precio}€`);
}

// Cuando se introduzca node .\8_pizzeria_1.js X , el mensaje será:
// Has elegido : Pizza Napolitana. Importe total: 11.20€
