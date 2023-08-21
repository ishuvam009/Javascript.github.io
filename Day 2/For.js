// for loop.

// for(let i=0;i<5;i++) {
//     console.log('In loop:', i);
// }
// console.log('Loop Finished.');

// Loops from given parameter.

const names = ['shuvam', 'radha', 'shyam'];

for(let i = 0;i < names.length;i++) {
    //console.log(i);
    //console.log(names[i]);

    let html = `The name is: ${names[i]}`;
    console.log(html);
}


const newNaes = ['SHUVAM','GEETA','RADHA','RAM','MOHAN','SUNIL','ROCKY'];

for(let a = 0; a < newNaes.length; a++){
    let fox = `The names of students are: ${newNaes[a]}`;
    console.log(fox);
}


console.log('End of program.')

// While loop.
console.log('While Loop.');

// let b = 0;
// while(b < 5){
//     console.log('In loop: ',b);
//     b++;
// }

let namesArray = ['shuvan','geeta','radha'];

let b = 0;
while(b < namesArray.length){
    console.log('The names are: ',b);
    b++;
}

console.log('End of program.');
console.log(' ');

// Do While Loop.

let c = 8;

do{
    console.log('The number is: ',c);
    c++;
} while(c < 12);