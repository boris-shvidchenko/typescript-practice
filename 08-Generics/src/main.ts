// If we know the types before hand
function stringEcho(arg: string): string {
    return arg;
}

// If we dont know the types we can use generics <T>
function echo<T>(arg: T): T {
    return arg;
}

// Example
function isObj<T>(arg: T): boolean {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
}

// Interfaces and classes can be set up with generics as well
interface Test<T> {
    // types go here
}