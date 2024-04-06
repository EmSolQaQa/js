const users = []
const form = document.querySelector("form")
const userName = document.querySelector("#username")
const eMail = document.querySelector("#email")
const password = document.querySelector("#password")
class User {
    constructor(userName,eMail,password){
        this.userName = userName
        this.eMail = eMail
        this.password = password
    }
    generateID(){
        return this.id = Date.now();
    }
}


function createUser(userName,eMail,password) {
    let user = new User (userName,eMail,password)
    user.generateID()
    return user
}
userForm.addEventListener("submit", function (event){
    event.preventDefault();
    if (userName.value && eMail.value && password.value) {
        let newUser = createUser(userName.value,eMail.value,password.value)
        users.push(newUser)
    }
    
})



