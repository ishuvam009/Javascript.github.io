//if statements.

const age = 20;

if(age > 18) {
    console.log('Your age is:',age,'& you can cast your vote.');
}

const ninjas = ['shuvam','harman','july','geeta'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas.");
}

console.log('End of program.');

// if else statements.

const password = 'pass@word123';

if(password.length >= 12) {
    console.log('The password is mighty strong.');
} else if(password.length >= 8){
    console.log('Your password is long enough.');
} else{
    console.log('Your password is not long enough.');
}