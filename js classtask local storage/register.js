// let plus = document.querySelector(".plus");
// let minus = document.querySelector(".minus");
// let clearBtn = document.querySelector(".clear");
// let counter = document.querySelector(".count");
// let count = localStorage.getItem("count") || 0;
// counter.textContent = localStorage.getItem("count");
// console.log(localStorage.getItem("count"));

// plus.addEventListener("click", function () {
//   count++;
//   counter.textContent = count;
//   //   console.log(count);
//   localStorage.setItem("count", count);
// });

// minus.addEventListener("click", function () {
//   count--;
//   counter.textContent = count;
//   localStorage.setItem("count", count);
// });

// clearBtn.addEventListener("click", function () {
//   count = 0;
//   counter.textContent = count;
//   localStorage.setItem("count", count);
// });
let userName = document.querySelector(".username")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let form = document.querySelector("form")
class User {
    static id = 1
    constructor(userName,email,password,isLogged = false){
    this.userName = userName
    this.email = email
    this.password = password
    this.isLogged = isLogged
    this.id = user.id++
    }
}
let userArr = getItemFromLocale() ?? [] 
function setItemFromLocale(arr) {
    localStorage.setItem("userA
    
    rr")
}
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj = new User(userName.value,email.value,password.value)
    

})



