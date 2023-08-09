const title = 'My Life';
const author = 'Sam';
const likes = 27;

// Concatenation way.

let result = 'The blog called ' + title + ' by ' + author + ' has '+ likes + ' likes.';
console.log(result);

// Template String way.
let results = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results);

// Creating html template.
let html =`
            <h1>${title}</h1>
            <p>by ${author}</p>
            <span>This blog has ${likes} likes.</span>
`;

console.log(html);