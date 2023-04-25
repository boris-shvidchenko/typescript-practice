"use strict";
// == Arrays ==
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
let bands = [];
// == Tuples ==
// Tuples are a strict version of arrays. They have fixed length and types in specific locations within the array
let myTuple = ['Dave', 42, true];
// == Objects ==
let myObj;
// Here TS will infer the type
const exampleObj = {
    prop1: 'Dave',
    prop2: 50
};
// Interfaces work the same way as types
// interface Guitarist {
//     name: string,
//     active: boolean,
//     albums: (string | number)[]
// };
let evh = {
    name: 'EVH',
    active: false,
    albums: [1984, 'OU812']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
// Enumeration, U will default to 0, D to 1, etc. If we change the value of U to something other than 0, D - A will update as needed.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
;
// console.log(Grade.B);
