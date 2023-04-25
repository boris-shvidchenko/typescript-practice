let myName: string = 'Dave';
let age: number;
let isLoading: boolean;
let album: any; // Allows any type to be assigned to variable

age = 42;
isLoading = true;

// For functions, be sure to indicate type of parameters
const sum = (a: number, b: number) => {
    return a + b;
};

let postId: string | number; // Allows both str and num to be type. This is a union type.
let isActive: number | boolean;
let re: RegExp = /\w+/g; // Regular expressions