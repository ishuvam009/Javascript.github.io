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

const password = 'pass@word1234';

if(password.length >= 12) {
    console.log('The password is mighty strong.');
} else if(password.length >= 8){
    console.log('Your password is long enough.');
} else{
    console.log('Your password is not long enough.');
}

console.log('End of the program.');







// Logical Operators - 'OR' || and 'AND' &&

console.log('Start of Logical Operators.');

const newPassword = 'Shuvam@28022000';

if(newPassword.length >=12 && newPassword.includes('@')) {
    console.log('Your Password is very strong!');
} else if(newPassword.length >= 8 && newPassword.length < 11) {
    console.log('Your password is OK!');
}
else{
    console.log('Your password is weak.');
}


// OR Operator. 'OR' -  ||

const newPassKey = 'Shuvam@';

if(newPassKey.length >= 12 && newPassKey.includes("@")) {
    console.log('Your passkey is very strong.');
} else if(newPassKey.length >=8 || newPassKey.includes("@")) {
    console.log('Your passkey is OK!');
}
else{
    console.log('Your passkey is weak.');
}

console.log('End of progrsm.');






// Logical 'NOT' (!).

let user = false;

if(!user){
    console.log("You must login to continue.");
}

console.log('End of program.');









// Break & Continue.

let scores = [90,80,0,56,100,39,99,20,69];

for(let i = 0;i < scores.length;i++){

    if(scores[i] === 0){ // If the program found 0 then it skips it and continue with the loop.
        continue;
    }

    console.log('Your score is: ',scores[i]);

    if(scores[i] === 100){
        console.log('You got the top score!');
        break;
    }
}

