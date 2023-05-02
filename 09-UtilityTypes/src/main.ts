// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

function updateAssignment(assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment {
    return {...assign, ...propsToUpdate};
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});

// Required and Readonly

function recordAssignment(assign: Required<Assignment>): Assignment {
    // send to database, etc...
    return assign;
} 

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
}

// Record

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U',
}

// Pick and Omit

// Pick allows us to pick types
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

// Omit removes a type
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;