// Una forma de acceder a datos de objetos o array
const arr = ["mensaje1",
    "mensaje2",
    "mensaje3"];

arr[0];
const user = { name: "Matt" age: 30 };
user.name; //Matt 
user.age; // 30

//para acceder
const [posicion1, posicion2] = arr;
console.log(posicion1);

//para acceder
const { age } = user;
console.log(age)

//ejemplo libros con destructuring
const [libro1, libro2, ...libros] = [
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', año: 1925 },
    { titulo: '1984', autor: 'George Orwell', año: 1949 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
    { titulo: 'Crepúsculo', autor: 'Stephenie Meyer', año: 2005 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 }
];

const post2kTitles = libros
    .filter(({ año }) => año > 2000)
    .map(({ titulo }) => titulo);

//ejemplo calculadora 
const calculadora = () => {
    let result = 0;
    const sumar = (value) => (result += value);
    const restar = (value) => (result -= value);
    const multiplicar = (value) => (result *= value);
    const dividir = (value) => (result /= value);
    return {
        sumar,
        restar,
        multiplicar,
        dividir,
    };
};

const { restar, multiplicar } = calculadora(); // { sumar, restar, multiplicar, dividir }

restar(10);
multiplicar(5);

//ejemplo con transaccion
const transactions = [
    { id: 'trx001', amount: 100, description: 'Purchase 1' },
    { id: 'trx002', amount: 50, description: 'Purchase 2' },
    { id: 'trx003', amount: 200, description: 'Purchase 3' },
];

const transaction1 = { id: 'trx001', amount: 100, description: 'Purchase 1' };

//los ... va a coger todos los datos del {} y devolver sin id.
//DEVOLVERIA (amount: 100, description: 'Purchase 1')
const { id, ...rest } = transaction1;

const transactionNuevo = structuredClone(rest);

console.log('transactionNuevo', transactionNuevo);