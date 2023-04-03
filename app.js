// punto 1

let numero = parseInt(prompt('Ingresa un numero'));
let numero2 = parseInt(prompt('Ingresa otro numero'));

document.write(`los numeros que ingresaste son ${numero} y ${numero2}`);
document.write(` <br> ${numero} - ${numero2} es ${numero - numero2} `);
document.write(`<br> ${numero} * ${numero2} es ${numero * numero2} `);

//punto 2

let nombre = prompt('Ingresa tu nombre y apellido');

let chequearnombre = nombre.includes("a","m");
console.log('el Nombre ingresado contiene las letras "a" o "m"');
console.log(chequearnombre);

//punto 3

let text = (' Pablito-clavo-un-clavito');
console.log(text);

let newtext = text.replaceAll("-", " ");
console.log(newtext);

