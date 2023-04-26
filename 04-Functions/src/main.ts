// Type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string,
    active: boolean,
    albums: stringOrNumberArray
};

type UserId = stringOrNumber;

// Literal types
let myName: 'Dave'; // Here we lock the values that can be assigned to the myName variable.
let userName: 'Dave' | 'John' | 'Amy';

// Functions
// the ':type' after the parameter is the type of return that the function provides. Void means unknown or any.
function add(a: number, b: number): number {
    return a + b; 
}

function logMessage(message: any): void {
    console.log(message);
}

// A way to assign param type and return type to a alias variable to be used with a function expression.
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (a,b) {
    return a * b;
}

// Function with interfaces work the same way, only an updated syntax is required.
interface mathFunction2 {
    (a: number, b: number): number;
}

// Optional parameters by using '?'
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// Default parameters by assigning a value to a type
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}

// Using the rest operator with types
function subAll(...nums: number[]): number {
     return nums.reduce((a,b) => a - b);
}

// console.log(subAll(10,1,2));
// console.log(subAll(10,9));

// Never types mean that nothing is returned. Never types can be identified by TypeScript when inifinite loops are present.

function createError(errMsg: string): never {
    throw new Error(errMsg);
}