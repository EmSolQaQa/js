// function fullName(ad,soyad) {
//     return `i am ${ad} ${soyad}`

// }
// console.log(fullName("Emin","Soltan"))
// function square(a) {
//     return a**2
// }
// console.log(square(40))
// function multiply(a,b) {
//     return a*b
// }
// function sum(a,b) {
//     return a+b
// }
// function subtruct(a,b) {
//     return a-b
// }
// function divide(a,b) {
//     return a/b
// }
// console.log(sum(2, 3)); // 5
// console.log(multiply(2, 3)); //6
// console.log(subtruct(2, 3)); //-1
// console.log(divide(2, 3)); // 0,666666
// function calculator(a,b,operator) {
//     if (operator=="+") {
//         return a+b
//     }
//     else if (operator=="*") {
//         return a*b
//     }
//     else if (operator=="/") {
//         return a/b
//     }
//     else if (operator=="-") {
//         return a-b
//     }
//     else{
//         return "duzgun emel daxil edin"
//     }
// }
// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3
// function getSum(arr) {
//     return arr[0]+arr[arr.length-1]
// }
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65

// function getSum(array) {
//     let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65

// function getSum(arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i]
//         }
        
//     }
//     return max
// }
// console.log(getSum([1, 2, 3])); // 4
// console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); //65
// function filterEmployees(array) {
//     const employees = [
//         { name: "Jamil", salary: 50000, department: "IT" },
//         { name: "Jale", salary: 60000, department: "HR" },
//         { name: "Bayram", salary: 55000, department: "IT" },
//         { name: "Sahil", salary: 75000, department: "HR" },
//         { name: "Maryam", salary: 65000, department: "IT" },
//         { name: "Elnara", salary: 80000, department: "HR" },
//         { name: "Davud", salary: 70000, department: "IT" },
//       ];
//     if (employees.salary>60000) {
//         return item.salary  
//     }
    
// }
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// let spaces = 0
// function findSpace(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]===" ") {
//             spaces += 1
            
//         }

        
//     }
//     return spaces
// }
// console.log(findSpace(sampleNews))
