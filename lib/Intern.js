class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }

    get getSchool() {
        return this.school;
    }

    get getRole() {
        return "Intern";
    }
}
