console.log(true,false);

// Methids can return booleans.
let email = 'shuvam@gmail.com';
let result = email.includes('@');
console.log(result);

// let names = ['shuvam', 'Ram', 'Duvam', 'Radha', 'Midha'];
// let results = names.includes('Ram');
// console.log(results);

// Comparison Operators.

let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age >= 20);
console.log(age != 90);
console.log(age <= 21);
console.log(age > 20);
console.log(age < 20);


let names = ('shuvam');
console.log(names == 'shuvam');
console.log(names == 'Shuvam');

console.log(names > 'Geeta'); // 'S' is gerater then 'G' because 'S' came after 'G'.

// Strict Comparison.
console.log('Line Break!!!!!!!!!!!!')
//Loose comparison vs Strict Comaparison.
//Loose Comparison- (Different type can be equal.)

let newAge = 30;

console.log(newAge == 30);
console.log(newAge == '30');


//Strict Comparison- (Different types can't be equal.)

console.log(newAge === 30);
console.log(newAge === '30');


console.log(newAge !== 30);
console.log(newAge !== '30');