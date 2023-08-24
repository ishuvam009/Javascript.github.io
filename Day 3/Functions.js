

// Calling the function.

add();   // Hoisting works with function declarations but not with function expression.

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.



// Function expression.

const speak = function() {
    console.log('Good Day!');
};

speak();

// Declearing the function.

function add() {
    let a = 20;
    let b = 30;
    let sum = a + b;

    console.log(sum);
}



