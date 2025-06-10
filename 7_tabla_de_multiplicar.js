// El usuario introducirá en el terminal un texto así:
// node 7_tabla_de_multiplicar.js 5 
// El valor final es del número del cual realizaremos 
// la tabla de multiplicar desde el 1 hasta el 10
// Esta tabla la guardaremos en un fichero llamado:
// tabla_de_multiplicar_del_X <- X es el número

// la salida será así:

// Tabla de multiplicar del 5
// ==========================
// 1 x 5 = 5
// 2 x 5 = 10
// ...
// 10 x 5 = 50

// console.log(process.argv[2]);

const fs = require("node:fs")

const numero = process.argv[2]

const lenArray = process.argv.length

if (lenArray == 2 ) {
    console.log("Falta el número para multiplicar");
} else if (lenArray == 3 ) {
    console.log("Falta los números de inicio y fin de la multiplicación");
} else {
    let mensaje = `Tabla de multiplicar del ${numero}:\n`
mensaje += "=".repeat(mensaje.length -1)

for (let i = 1; i <= 10; i++ ) {
    mensaje += `\n\t${i} x ${numero} = ${i * numero}`
}

console.log(mensaje);

fs.writeFileSync(`tabla_de_multiplicar_del_${numero}.txt`, mensaje, "utf-8")
}

