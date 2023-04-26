// Convert to more or less specific using the 'as' keyword
var a = 'hello';
var b = a; // less specific type
var c = a;
// Using angle brackets
var d = 'world';
var e = 'world';
// Practical example to why we would use assertions
var addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// Here we are stating that we will return the function as a string
var myVal = addOrConcat(2, 2, 'concat');
// Not null syntax by using '!'
// If we know that something, in this case a DOM element, will not be null, we can use not null.
var img = document.querySelector('img');
img.src;
// or we can simply use the optional check syntax used in standard JS
// img?.src;
