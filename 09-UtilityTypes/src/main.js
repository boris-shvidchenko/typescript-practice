// Utility Types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateAssignment(assign, propsToUpdate) {
    return __assign(__assign({}, assign), propsToUpdate);
}
var assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
var assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
function recordAssignment(assign) {
    // send to database, etc...
    return assign;
}
var assignVerified = __assign(__assign({}, assignGraded), { verified: true });
// Record
var hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
var finalGrades = {
    Sara: 'B',
    Kelly: 'U',
};
