// for
////  indice  | ejecuta | incremento
console.log('Inicio');
// for (let i = 5; i > 0; i = i - 1) {
//  console.log('Bloque dentro del for');
//}
let count = [];
for (let i = 0; i < 5; i++) {
  console.log('Valor del i: ', i);
  count.push(i);
}

console.log('FIN', count);
const fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'orange', 'Kiwi'];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].toLowerCase() !== 'kiwi') {
    console.log(fruits[i]);
  } else {
    console.log('****');
  }
}

/// while