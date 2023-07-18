// ejemplos de if, else if, else, switch
let edad = 30;

console.log('Inicio');

/// `` , "", ''

if (edad >= 18) {
  // codigo
  let edad = 1;
  let legalAge = 18;
  console.log(`Eres mayor de edad con "${edad}" años`);
} else if (14 <= edad) {
  console.log('Eres adolescente');
} else {
  console.log('No eres "mayor" de edad');
}

// ternario
const resultado = edad === 30; // true o un false
const message = resultado ? 'Tienes mi edad' : 'No tienes mi edad';

console.log(message);

console.log('<---example--->');

let value = Infinity;

if (value) {
  console.log(`Value: ${value}`);
} else {
  console.log('Else ->', value);
}

// switch
let day = "Wednesday";

if (day === "Monday") {
  console.log("It's monday");
} else if (day === "Tuesday") {
  console.log("It's Tuesday");
} else if (day === "Wednesday") {
  console.log("It's Wednesday");
} else {
  console.log("It is neither Monday, Tuesday nor Wednesday");
}

switch (day) {
  case "Monday":
    console.log("It's monday switch");
    break;
  case "Tuesday":
    console.log("It's Tuesday switch");
    break;
  case "Wednesday":
    console.log("It's Wednesday switch");
    break;
  default:
    console.log("It is neither Monday, Tuesday nor Wednesday switch");
    break;
}
