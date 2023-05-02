interface TransactionObj {
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}
 
// This would work
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);

// Dynamically accessing the properties of an object wont work (such as below) and will require index signatures
let prop: string = 'Pizza';
// console.log(todaysTransactions[pizza]);

// Index signature creation

interface TransactionObj2 {
    [index: string]: number; // All keys will be strings and all values will be numbers. 
}

const todaysTransactions2: TransactionObj2 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

function todaysNet(transactions: TransactionObj2) {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}

console.log(todaysNet(todaysTransactions2));

// Key of assertion

interface Student {
    name: string,
    GPA: number,
    classes?: number[], // classes is optional here
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    // console.log(`${key}: ${student[key]}`);  < This wont work
    console.log(`${key}: ${student[key as keyof Student]}`); // This will work
}