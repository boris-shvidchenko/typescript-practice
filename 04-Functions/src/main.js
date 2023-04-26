// Literal types
var myName; // Here we lock the values that can be assigned to the myName variable.
var userName;
// Functions
// the ':type' after the parameter is the type of return that the function provides. Void means unknown or any.
function add(a, b) {
    return a + b;
}
function logMessage(message) {
    console.log(message);
}
var multiply = function (a, b) {
    return a * b;
};
// Optional parameters by using '?'
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default parameters by assigning a value to a type
var sumAll = function (a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
};
// Using the rest operator with types
function subAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a - b; });
}
// console.log(subAll(10,1,2));
// console.log(subAll(10,9));
// Never types mean that nothing is returned. Never types can be identified by TypeScript when inifinite loops are present.
function createError(errMsg) {
    throw new Error(errMsg);
}
