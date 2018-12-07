interface Person {
    name: string;
    gender: Gender;
}

enum Gender {
    MALE,
    FEMALE,
}

interface Student extends Person{
    Subject: Subject[];
    idNum: number;

}

interface Subject {
    codeSubject: string;
}

interface Manager extends Person{
    branch: Branch;
    salary: number;
}

interface Branch {

}