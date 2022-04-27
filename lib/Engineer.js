class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        this.githubUsername = githubUsername;
        super(name, id, email);
    }

    get getGithubUsername() {
        return this.getGithubUsername;
    }

    get getRole() {
        return "Engineer";
    }
}
