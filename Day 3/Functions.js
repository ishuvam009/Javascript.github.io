

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




// Argument and Parameters.

const say = function(name, time) {  // here name and time are the parameters.
    console.log(`good ${time} ${name}`);
}



say('Mario', 'morning');  // Here 'Mario' and 'morning' are the arguments.




// Experiment.


const exp = function(time, university) {
    console.log(`Hello, ${time} welcome to ${university}.`);
}


exp('Good Morning','KiiT University!');

// Passing the arguments in a different way.

const way = function(name = 'shuvam', time = 'night') {
    console.log(`Good ${time} ${name}`);
}

way(); // Passing the default value decleared in the parameter.

way('Radha','morning'); // Overwriting the default value by the arguments.


// Returning values.

const area = function() {
    
}


