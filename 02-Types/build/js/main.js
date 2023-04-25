"use strict";
let myName = 'Dave';
let age;
let isLoading;
let album; // Allows any type to be assigned to variable
age = 42;
isLoading = true;
// For functions, be sure to indicate type of parameters
const sum = (a, b) => {
    return a + b;
};
let postId; // Allows both str and num to be type. This is a union type.
let isActive;
let re = /\w+/g; // Regular expressions
