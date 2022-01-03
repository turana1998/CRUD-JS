// Muellimler
// Telebeler
// Mentorlar


// M of MVC

studentContext = []

class User {
    constructor(_name, _surname, _email) {
        this.name = _name
        this.surname = _surname
        this.email = _email
    }

    showDetails() {
        return `${this.name},${this.surname},${this.email}`
    }
}

class Student extends User {
    constructor(_name, _surname, _email) {
        super(_name, _surname, _email)
    }
}

class Teacher extends User {
    //  phone ,profession

    constructor(_name, _surname, _email, _phone, _profession) {
        super(_name, _surname, _email)
        this.phone = _phone
        this.profession = _profession
    }

    showDetails() {
        return `${this.name},${this.surname},${this.email},${this.phone},${this.profession}`
    }
}

class Mentor {
    // phone
}


//  C of MVC
function addStudent() {
    if (true) {
        return successMessage()
    } else {
        return errorMessage()
    }

}

function deleteStudent() {

}

function updateStudent() {

}

function showStudent() {

}


// View
function renderStudent() {

}

function Message(_message) {
    return `<p>${_message}</p>`
}


// 

let user = new User('Memmed', 'Hesenov', 'memmed@gmail.com')
let student = new Student('Hesen', 'Qurbanov', 'hesen@gmail.com')
let teacher = new Teacher('Zohrab', 'Semedzade', 'zohrab@gmail.com', '050 200 11 11', 'Javascript Expert')