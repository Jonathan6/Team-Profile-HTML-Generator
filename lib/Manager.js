// Inherits Employee
class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        this.officeNumber = officeNumber;
        super(name, id, email);
    }

    get getRole() {
        return "Manager";
    }
}
