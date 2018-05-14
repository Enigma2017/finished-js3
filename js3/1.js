// ## 0 Работа с функциями
// Напишите функцию которая возвращала б сумму всех введенных аргументов
// Если один из аргументов не число, вывод сообщения "Все аргументы должны быть числовыми"
/*
console.log(argumentsSumm(10, 20, 50, 4, 17))   // 101
console.log(argumentsSumm(0, 1, 1, -1, 1))      // 2
console.log(argumentsSumm(4, 'lol', 0))         // Все аргументы должны быть числовыми
console.log(argumentsSumm(NaN, 4, 6, 4, 0)) // Все аргументы должны быть числовым
*/

//console.log(argumentsSumm(10, 20, 50, 4, 17))  // 101
var args = (10, 20, 50, 4, 17);
function argumentsSumm(...args) {
 var sum = 0;
 for(let i = 0; i < args.length; i++) {
  if(!Number.isInteger(args[i])) {
   return 'Все аргументы должны быть числовыми';
  } else {
   sum += args[i]
  }
 }
 return sum;
}
sum = argumentsSumm(10, 20, 50, 4, 17);
console.log(sum);
argumentsSumm(args);


//console.log(argumentsSumm(0, 1, 1, -1, 1))  // 2
var args1 = (0, 1, 1, -1, 1);
function argumentsSumm(...args1) {
 var sum = 0;
 for(let i = 0; i < args1.length; i++) {
  if(!Number.isInteger(args1[i])) {
   return 'Все аргументы должны быть числовыми';
  } else {
   sum += args1[i]
  }
 }
 return sum;
}
sum = argumentsSumm(0, 1, 1, -1, 1);
console.log(sum);
argumentsSumm(args1);


//console.log(argumentsSumm(4, 'lol', 0))  // Все аргументы должны быть числовыми

var args2 = (4, 'lol', 0);
function argumentsSumm(...args2) {
 var sum = 0;
 for(let i = 0; i < args2.length; i++) {
  if(!Number.isInteger(args2[i])) {
   return 'Все аргументы должны быть числовыми';
  } else {
   sum += args2[i]
  }
 }
 return sum;
}
sum = argumentsSumm(4, 'lol', 0);
console.log(sum);
argumentsSumm(args2);


//console.log(argumentsSumm(NaN, 4, 6, 4, 0)) // Все аргументы должны быть числовым

var args3 = (NaN, 4, 6, 4, 0);
function argumentsSumm(...args3) {
 var sum = 0;
 for(let i = 0; i < args3.length; i++) {
  if(!Number.isInteger(args3[i])) {
   return 'Все аргументы должны быть числовыми';
  } else {
   sum += args3[i]
  }
 }
 return sum;
}
sum = argumentsSumm(NaN, 4, 6, 4, 0);
console.log(sum);
argumentsSumm(args3);