
//definir funcion
function nombre() {
    const saludo = "hola";
    console.log(saludo)
}

//invocar funcion
nombre()

console.log("----------------")
function esMayorDeEdad(age) {
    if (age < 1) {
        console.log("Valor Incorrecto");
    } else {
        if (age > 18) {
            console.log("Eres mayor de edad", age);
        } else {
            console.log("Eres menor de edad", age);
        }
    }
}
esMayorDeEdad(18);

console.log("----------------")
function foo() {
    return 2;
}
const variable = foo(); // puedo definir la funcion en una variable
console.log(variable) //retornara 2

console.log("----------------");
function sum(num1, num2) {
    return num1 + num2;
}
const result = sum(2, 2);
console.log(result);

console.log("----------------");
function esMayorDeEdad(age) {
    if (age < 1) {
        return null;
    } //return age >= age; para reemplazar todo lo de abajo

    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

esMayorDeEdad(18);

console.log("----------------");
function crearSaludo(nombre) {
    return `Hola ${nombre}!`;
}
//el console log muestra la funcion en si, no el return
const saludo = crearSaludo;
console.log(saludo("Gaby"));

console.log("----------------");


const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

function findOddNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 !== 0) {
            // oddNumbers[oddNumbers.length] = number
            oddNumbers.push(number);
            // oddNumbers = oddNumbers.concat(number);
        }
    }
    return oddNumbers;
}
const oddNumber = findOddNumber(numbers);
console.log(oddNumber);

console.log("-------arrow function---------");
//arrow  function =>
//const restar = (num1 = 0, num2 = 0) => {
//return num1 - num2;
//};
//restar(10, 80);

const restar = (num1 = 0, num2 = 0) => num1 - num2;
console.log(restar(10, 80));

console.log("----------------");
const activateAccount = (name) => { //si es solo un parametro, no hace falta el parentesis
    return {
        name,   // name: name, asi se escribe cuando la variable es igual al valor (name,)
        active: true
    };
};
const user1 = activateAccount("gaby");
console.log(user1);

console.log("----------------");
const activateAccounts = name => ( // parentesis en vez de return
    {
        name,
        active: true
    }
);

const user2 = activateAccount("test2");
console.log(user2);

console.log("----------------");
// REST PARAMS
const sumar = (...params) => {
    let resultado = 0;
    for (let number of params) {
        resultado += number;
    }
    return resultado;
};

const resultado = sumar(1, 2, 4, 5, 6);
console.log(resultado);

console.log("----------------");
//CLOJURES

const counter = () => {
    let count = 0;

    const increment = () => {
        count++;
    };

    const getCount = () => count;

    const resetCount = () => {
        count = 0;
    };

    return {
        increment,
        resetCount,
        count: getCount,
    };
};

const contador1 = counter();

console.log(contador1);

contador1.increment();
contador1.increment();
contador1.increment();

contador1.resetCount();
const contador2 = counter();
console.log(contador2.count());
contador2.increment();
contador2.increment();
contador2.increment();
console.log('contador1', contador1.count());
console.log('contador2', contador2.count());