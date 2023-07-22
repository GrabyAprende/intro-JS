const matrix = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9]  // 2
];

//console.log(matrix[1][0]);

matrix.pop();

//console.log(matrix);
console.log("---matrix----")
for (let index = 0; index < matrix.length; index++) {
  const row = matrix[index];
  console.log(row);

  for (let column = 0; column < row.length; column++){
console.log(row[column])
  }
}
console.log("---end-matrix----")

// Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo
/*
--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

const arrayBi = [
  ['-', '-', '*', '-', '-'], // 0
  ['-', '*', '*', '*', '-'], // 1
  ['*', '*', '*', '*', '*']  // 2
];
for (let i = 0; i < arrayBi.length; i++) {
  let dibujo = "";

  for (let j = 0; j < dibujo.length; j++) {
    dibujo += arrayBi[i][j];
}
}
console.log(dibujo);