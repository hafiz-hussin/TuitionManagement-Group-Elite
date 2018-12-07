interface Person {
    name: string;
    gender: Gender;
}

enum Gender {
    MALE,
    FEMALE,
}

interface Student extends Person{
    idNum: number;

}

interface Manager extends Person{
    branch: Branch;
    salary: number;
}

interface Instructor extends Person{
    branch: Branch;
    Sessions?: Sessions[];
    rating?: number;
    salary: string;
}

interface Sessions{
    attendances: Attendance[];
    instructors: Instructor[];

}

interface Attendance {
    students: Student[];
}

interface Branch {
    branchName: string;
    branchID: string;

}


interface Subject {
    idSubject: string;
    subjectName: string;
    sessions: Sessions[];
    fees: number;
}

// create objects test