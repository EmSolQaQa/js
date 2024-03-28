// let x = window.prompt("ededi daxil edin")
// if (x%7 == 0) {
//     console.log("ededi 7 ye bolunur")
// }

// else{
//     console.log((Math.round(x/7))*7)
// }
// task1
// let x = window.prompt("yasinizi daxil edin")
// if (x<125) {
//     if (x<65) {
//         console.log("yasiniz pensiyaya dusmur")
//     }
//     else  {
//         console.log("pensiyaya dusursen")
//     }
// }
// task2
// let x = window.prompt("ededi daxil edin")
// if (x%2==0) {
//     console.log("cut")
// }
// else{
//     console.log("tek")
// }
// task3
// let x = window.prompt("ayi daxil edin");
// switch (x) {
//   case "iyun":
//   case "iyul":
//   case "avqust":
//     console.log("yay fesli");
//     break;
//   case "sentyabr":
//   case "oktyabr":
//   case "noyabr":
//     console.log("payiz fesli");
//     break;
//   case "dekabr":
//   case "yanvar":
//   case "fevral":
//     console.log("qis fesli");
//     break;
//   case "mart":
//   case "aprel":
//   case "may":
//     console.log("yaz fesli");
//     break;

//   default:
//     break;
// }
// task4
// let x = +window.prompt("ededi daxil edin");
// if (x % 3 == 0 && x % 5 == 0) {
//   console.log("eded 3 ve 5 e bolunur");
// }
// else{
//     console.log("eded 3 ve 5 e bolunmur")
// }
// let x = +window.prompt("ededi daxil edin");
// if (x>0) {
//     if (x%2==0) {
//         console.log("eded cutdu")
//     }
//     else{
//         console.log(x%2)
//     }
// }
// let x = +window.prompt("ededi daxil edin");
// let y = +window.prompt("ededi daxil edin");
// let hasil = x*y;
// if (hasil>0) {
//     console.log("hasil musbetdir")
// }
// else{
//     console.log("hasil menfidir")
// }
// task7
// let x = +window.prompt("ededi daxil edin");
// if (x > 0 && x < 100) {
//   console.log("eded 1-100 arasindadir");
// } else {
//   console.log("eded 1-100 arasinda deyil");
// }
// task9
// let x = +window.prompt("x daxil edin");
// let y = +window.prompt("y daxil edin");
// let z = +window.prompt("z daxil edin");
// if (x>z && x>y) {
//     console.log("en boyuk x dir")
// }
// else if (y>z && y>x) {
//     console.log("en boyuk y dir")
// }
// else if (z>x && z>y) {
//     console.log("en boyuk z dir")
// }
// task10
// let x = +window.prompt("qiymetivizi daxil edin");
// if (x < 100 && x > 0) {
//   if (x > 89) {
//     console.log("qiymetiniz A");
//   } else if (x > 79 && x < 90) {
//     console.log("qiymetiniz B");
//   } else if (x > 69 && x < 80) {
//     console.log("qiymetiniz c");
//   } else if (x > 59 && x < 70) {
//     console.log("qiymetiniz d");
//   }
//   else {
//     console.log("Qiymetiniz F");
//   }
// }
// else{
//     console.log("Qiymeti duzgun daxil edin")
// }
// task11
// let x = +window.prompt("yasivizi daxil edin");
// if (x > 0) {
//   if (x < 18) {
//     console.log("Yeniyetme");
//   } else if (x >= 18 && x < 65) {
//     console.log("Yetkin");
//   } else {
//     console.log("Kaftar");
//   }
// } else {
//   console.log("Yasi duzgun daxil et");
// }
// task12
// let x = +window.prompt("x daxil edin");
// let y = +window.prompt("y daxil edin");
// if (x > 0 && y < 0) {
//   console.log(4 * x + 2 * y + 4);
// } else if (x > 0 && y == 0) {
//   console.log(2 * x - y + 3);
// } else if (x < 0 && y > 0) {
//   console.log(3 * x + 4 * y + 3);
// } else {
//   console.log("sertleri duzgun daxil edin");
// }
// task13
// let a = +window.prompt("x daxil edin");
// let b = +window.prompt("y daxil edin");
// let z = window.prompt("emelliyati daxil edin");
// switch (z) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;

//   default:
//     break;
// }
// task1
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// task2
// let a = +window.prompt("daxil edin");
// if (a%2==0) {
//     console.log(`${a} cutdu`)
// }
// else{
//     console.log(`${a} tekdi`)
// }
// task3
// let a = +window.prompt("daxil edin");
// let i = null;
// while (i < a) {
//   i++;
//   if (a % i == 0) {
//     console.log(i);
//   }
// }
// let a = +window.prompt("kateti edin");
// let b = +window.prompt("kateti edin");
// let c = +window.prompt("hipetonuz edin");
// let d = Math.sqrt(a ** 2 + b ** 2);
// if (d == c) {
//   console.log("duzbucaqli ucbucaqdir");
// } else {
//   console.log("duzbucaqli ucbucaq deyil");
// }
// let a = +window.prompt("ededi daxil edin");
// let tek = a % 10;
// let onluq = ((a % 100) - (a % 10)) / 10;
// let yuzluk = ((a % 1000) - (a % 100)) / 100;
// console.log(yuzluk,onluq,tek);
// let a = +window.prompt("terefi daxil edin");
// let b = +window.prompt("terefi daxil edin");
// let c = +window.prompt("terefi daxil edin");
// if (a==b && b==c) {
//     console.log("Beraberterefli ucbucaqdir")
// }
// else{
//     console.log("Beraberterefli ucbucaq deyil")
// }
// let a = +window.prompt("terefi daxil edin");
// let b = +window.prompt("terefi daxil edin");
// let c = +window.prompt("terefi daxil edin");
// if (c==b && a!=c && b!=a) {
//     console.log("Beraberyanli ucbucaqdir")
// }
// else if (a==b && a!=c && b!=c) {
//     console.log("Beraberyanli ucbucaqdir")
// }
// else if (a==c && b!=c && b!=a) {
//     console.log("Beraberyanli ucbucaqdir")
// }
// else{
//     console.log("Beraberyanli ucbucaq deyil")
// }
// let a = +window.prompt("terefi daxil edin");
// let b = +window.prompt("terefi daxil edin");
// let c = +window.prompt("terefi daxil edin");
// if ( a < b + c && b < a + c && c < b + a) {
//   console.log("ucbucaqdir");
// }
//  else {
//   console.log("Ucbucaq deyil");
// }
// minmax
// let d = +window.prompt("ededi daxil edin");
// let a = d % 10;
// let b = ((d % 100) - (d % 10)) / 10;
// let c = ((d % 1000) - (d % 100)) / 100;
// if (a>=b && a>=c && b>=c) {
//     console.log("enboyuk",a*100+b*10+c,"enkicik",c*100+b*10+a)
// }
// else if (a>=b && a>=c && c>=b) {
//     console.log("enboyuk",a*100+c*10+b,"enkicik",b*100+c*10+a)
// }
// else if (b>=a && b>=c && c>=a) {
//     console.log("enboyuk",b*100+c*10+a,"enkicik",a*100+c*10+b)
// }
// else if (b>=a && b>=c && a>=c) {
//     console.log("enboyuk",b*100+a*10+c,"enkicik",c*100+a*10+b)
// }
// else if (c>=a && c>=b && b>=a) {
//     console.log("enboyuk",c*100+b*10+a,"enkicik",a*100+b*10+c)
// }
// else if (c>=a && c>=b && a>=b) {
//     console.log("enboyuk",c*100+a*10+b,"enkicik",b*100+a*10+c)
// }

