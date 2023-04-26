type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less specific using the 'as' keyword
let a: One = 'hello';
let b = a as Two; // less specific type
let c = a as Three;

// Using angle brackets
let d = <One>'world';
let e = <string | number>'world';

// Practical example to why we would use assertions

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

// Here we are stating that we will return the function as a string
let myVal: string = addOrConcat(2,2,'concat') as string;

// Not null syntax by using '!'
// If we know that something, in this case a DOM element, will not be null, we can use not null.
const img = document.querySelector('img')!;
img.src;
// or we can simply use the optional check syntax used in standard JS
// img?.src;
