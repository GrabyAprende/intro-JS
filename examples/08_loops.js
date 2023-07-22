// for
////  indice  | ejecuta | incremento
console.log('Inicio');
// for (let i = 5; i > 0; i = i - 1) {
//  console.log('Bloque dentro del for');
//}
/*let count = [];
for (let i = 0; i < 5; i++) {
    console.log('Valor del i: ', i);
    count.push(i);
}

//console.log('FIN', count);
const fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'orange', 'Kiwi'];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase() !== 'kiwi') {
        console.log(fruits[i]);
    } else {
        console.log('****');
    }
}*/

console.log("--continue y break--");
for (let index = 0; index < 10; index++) {
    if (index === 2 || index === 8 ){
        continue; //para saltarse pasos del bucle
    }
    console.log("index", index);
}
console.log("-----end continue/break example------")  
//reemplazar el continue por break, para parar.

/*for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    if (fruits === orange){

    }
    
}*/
/*Enunciado: Dada una lista de números, crea una nueva lista que contenga únicamente los números impares de la lista original.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101

Paso 1: Crea un array llamado numbers que contenga al menos estos números
Paso 2: Crea un array vacío llamado oddNumbers.
Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.
Paso 4: En cada iteración, verifica si el número actual es impar.
        Si es impar, agrégalo al array oddNumbers utilizando el método push().
        NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0
Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.*/

let numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number[index] % 2 !== 0){
        oddNumbers.push(number);
    }  
}
console.log(oddNumbers);

/// while
let count = [];

/*for (let i = 0; i <= 5; i++){
    count.push(i);
}*/
let i = 0;
while(i <= 5){ //si la i es menor a 5
console.log(i);
//para que no se quede un bucle infinito, se incrementa la i
// i = i + 1;
i++;
count.push(i)
}
console.log(count);

/*while(true) {
    const mensaje = prompt("¿exit? Y o N?")
    if (mensaje === "Y") break;
    console.log(mensaje);
    }*/

    while(true) {
        const pregunta = prompt("Elije: Piedra, papel o tijera")
        const rival = "piedra"
        if (pregunta === null)
        if(pregunta === "papel") {
            console.log("Ganaste, tu tienes papel y el rival piedra");   
        } else if (pregunta === "tijeras") {
            console.log("Perdiste, tu tienes tijeras y el rival piedra");
        } else if (pregunta === "piedra") {
            console.log("Empate, ambos tienen piedra");
    } 
}