// let count = 0
// let salary = 0
// function human(fullName,age){
//     this.fullName = fullName;
//     this.age = age;
// }
// function employee(salary,department,experienceYear) {
//     this.salary=salary;
//     this.department=department;
//     this.experienceYear=experienceYear;
// }
// const eminsoltan = new employee(1000,"it",7);
// Object.setPrototypeOf(eminsoltan,new human("Emin Soltan"))
// const minimiki = new employee(1100,"iti",17);
// Object.setPrototypeOf(eminsoltan,new human("mini miki"))
// const mikimini = new employee(1200,"it",27);
// Object.setPrototypeOf(eminsoltan,new human("miki mini"))
// const Employees = [eminsoltan,minimiki,mikimini]
// for (let i = 0; i < Employees.length; i++) {
//     const element = array[i];
//     if (employee.department === it && employee.experienceYear>5) {
//        salary+=salary
//        count++
//     }

// }
// console.log(salary/count);
// task1
// function volumeofBox(obj) {
//   return obj.width * obj.length * obj.height;
// }
// const kub = {
//   width: 15,
//   length: 10,
//   height: 15,
// };
// console.log(volumeofBox(kub));
// console.log(
//   volumeofBox({
//     width: 5,
//     length: 1,
//     height: 1,
//   })
// );
// task2
// let text = "nicat oglan deyil"
// let b = ""
// function capitalizeSentences(str) {
//     str = text.split(" ")
//     for (let i = 0; i < str.length; i++) {
//         b += str[i][0].toUpperCase() + str[i].slice(1) + " "

//     }
//     return b
// }
// console.log(capitalizeSentences(text));
// task3
// let str = "nicat !oglandir";
// let count = 0;
// let saits = ["a","o","u","e","i"]
// let array = []
// function numberofVowels(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (saits.includes(str[i])) {
//             array.push(str[i])
//         }
//     }
//     return [...new Set(array)]
// }
// console.log(numberofVowels(str));
// task4
// let text = "a aa aaa aaaa aaaaaaa";
// function longestWord(str) {
//   str = text.split(" ");
//   let longest = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length > longest.length) {
//       longest = str[i];
//     }
    
//   }
//   return longest;
// }
// console.log(longestWord(text));
// task5
let text = "sirmemmedhuseynqulu"

