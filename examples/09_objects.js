
let car = {
    brand: "Ford",
    year: 1969,
    model: "Mustang"
};
console.log(typeof car);
console.log(car)

//para acceder a ella, 
//console.log(car.brand)

//una forma de acceder a los elementos con object
let user2 = { //array
    name: "Matt",
    age: 25,
    city: "Madrid",
    hobbies: ["futbol", "basket"]
};
const keys = Object.keys(user2);
const values = Object.values(user2);

console.log(keys);
console.log(values);

//FOR IN -- 
const key = "name";

console.log("for in");
for (let property in user2) {
    if (property === key) {
        const keyValue = user2[key]; //para mostrar y acceder tambien
        console.log(`tiene hobbies ${hobbies.join(' , ')}`) //join, convierte en string los arrays
        console.log(`tiene hobbies ${key} y el valor es ${keyValue}`)
    }
}
// FOR OF --

const array = [
    ["-", "-","*", "-", "-"],
    ["-", "*", "*", "*", "-"],
    ["*", "*", "*", "*", "*"],
];

for (i of array) {
    let line = "";
    for (j of i) {
        line += j;
    }
    console.log(line);
}

//for (i of array) {
    //console.log(joinn)
//}
