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
// student a


export class testAttendance {

    attendance : Attendance;
    students : Student[]=[];

    constructor(){

        let student =  {
            gender : Gender.FEMALE,
            idNum : 1,
            name : "THE UNKNOWN"
        };

        let student2 =  {
            gender : Gender.FEMALE,
            idNum : 1,
            name : "THE UNKNOWN"
        };

        this.students.push(student);
        this.students.push(student2);

        this.attendance={
        students : this.students
        }
        this.show();


    }

    show(){
        console.log(this.attendance);
    }



}

let test = new testAttendance();