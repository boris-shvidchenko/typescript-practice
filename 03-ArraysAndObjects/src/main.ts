// == Arrays ==
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;

let bands:string[] = []

// == Tuples ==
// Tuples are a strict version of arrays. They have fixed length and types in specific locations within the array
let myTuple: [string, number, boolean] = ['Dave', 42, true];

// == Objects ==
let myObj: object;

// Here TS will infer the type
const exampleObj = {
    prop1: 'Dave',
    prop2: 50
};

// This allows us to define a type that we can assign to a variable later on. This custom type can be reused for multiple objects as well.
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
};

// Interfaces work the same way as types

// interface Guitarist {
//     name: string,
//     active: boolean,
//     albums: (string | number)[]
// };

let evh: Guitarist = {
    name: 'EVH',
    active: false,
    albums: [1984, 'OU812']
};

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
};

// Enumeration, U will default to 0, D to 1, etc. If we change the value of U to something other than 0, D - A will update as needed.
enum Grade {
    U,
    D,
    C,
    B,
    A
};

// console.log(Grade.B);


