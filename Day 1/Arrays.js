// Arrays in string.

let ninjas = ['Shuvam', 'Kumar','Mandal'];
console.log(ninjas);

//Selecting from a position.

console.log(ninjas[2]);

//Update a new item in position 2.

ninjas[2]= 'Ojha';

console.log(ninjas);

// Arrays in numbers.

let ages = [12, 19, 50, 70, 99];
console.log(ages);

console.log(ages[2]);

// Mixed data types.

let mix = ['HI', 30, 'KIIT', 90];
console.log(mix);

/// Array size.

console.log(ninjas.length);

// Array menthods.

let newArray = ['Hi','this','is','a','javascript','code'];

let join = newArray.join('-'); //Joinning them with a '-' between them. 
console.log(join);

//To find the index.

let findTheIndex = newArray.indexOf('javascript');
console.log(findTheIndex);

// Joining two array.

let joinArray = ninjas.concat(newArray);
console.log(joinArray);

console.log('Github Added');