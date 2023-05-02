var todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// This would work
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);
// Dynamically accessing the properties of an object wont work (such as below) and will require index signatures
var prop = 'Pizza';
var todaysTransactions2 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
function todaysNet(transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}
console.log(todaysNet(todaysTransactions2));
var student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
for (var key in student) {
    // console.log(`${key}: ${student[key]}`);  < This wont work
    console.log("".concat(key, ": ").concat(student[key])); // This will work
}
