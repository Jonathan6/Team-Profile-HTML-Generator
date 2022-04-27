class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // getId()
    get getId() {
        return this.id;
    }

    // getEmail()
    get getEmail() {
        return this.email;
    }

    // getRole()
    get getRole() {
        return "Employee";
    }
    
    // getName()
    get getName() {
        return this.name;
    }
}

