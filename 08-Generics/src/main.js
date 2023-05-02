// If we know the types before hand
function stringEcho(arg) {
    return arg;
}
// If we dont know the types we can use generics <T>
function echo(arg) {
    return arg;
}
// Example
function isObj(arg) {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
}
