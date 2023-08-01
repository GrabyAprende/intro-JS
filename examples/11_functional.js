
// Funcion Pura
const sumar = (a, b) => a + b;
sumar(2, 2); //4

//Arreglar este código

/*const datos = [];

// no pura :(
const addElement = (arr, newElement) => {
    arr.push(newElement);
    return arr;
};

console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(datos); // []*/

const datos = [];

// Función pura :)
const addElement = (arr, newElement) => {
    return [...arr, newElement];
};

console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(datos); /// []

// map,(es inmutable) filter, forEach

const numbers1 = [1, 2, 3, 4, 5, 6];

const double = (number) => number * 2;
numbers1.map(function (item, index) {
    console.log("item", item);
    console.log("index", index);
}); //llamamos a la funcion map

//filter

const numbers2 = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers2 = [];

for (let i = 0; i < numbers2.length; i++) {
    const number = numbers2[i];
    if (number % 2 !== 0) {
        // oddNumbers[oddNumbers.length] = number
        oddNumbers2.push(number);
        // oddNumbers = oddNumbers.concat(number);
    }
}
console.log(oddNumbers2);

console.log("----funcion de arriba con filter-----")
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(oddNumbers);

// forEach

/*const doubleArray = [];

numbersExample.forEach((element) => {
    doubleArray.push(element * 2);
});*/

/*Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros, utiliza filter para filtrar los libros cuyo año de publicación sea posterior a 2000 y luego utiliza map para crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008*/
const libros = [
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', anho: 1925 },
    { titulo: '1984', autor: 'George Orwell', anho: 1949 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anho: 1967 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', anho: 1997 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', anho: 2003 },
    { titulo: 'Crepúsculo', autor: 'Stephenie Meyer', anho: 2005 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', anho: 2008 }
];

// filtrar 
const librosPost2000 = libros.filter((libro) => libro.año > 2000);
//crear
const titulosLibrosPost2000 = librosPost2000.map((libro) => libro.titulo);

console.log(titulosLibrosPost2000);

//EJERCICIO REDUCE

const transactions = [
    { id: 'trx001', amount: 100, description: 'Purchase 1' },
    { id: 'trx002', amount: 50, description: 'Purchase 2' },
    { id: 'trx003', amount: 200, description: 'Purchase 3' },
];

  // usando reduce

/*
const resultado = {
trx001: { id: 'trx001', amount: 100, description: 'Purchase 1' },
trx002: { id: 'trx002', amount: 50, description: 'Purchase 2' },
trx003: { id: 'trx003', amount: 200, description: 'Purchase 3' }
}
*/