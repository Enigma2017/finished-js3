// ## Callback функции
//
// Создайте функцию которая принимает 2 числовых значения
// Третьим аргументом функции должна быть функция, которая будет манипулировать этими агументами
/*console.log(callback(20, 10, function(a, b){
  return a + b
})) // 30

console.log(callback(20, 10, function(a, b){
  return a - b
})) // 10

console.log(callback(20, 10, function(a, b){
  return a * b
})) // 200*/

// * Your code Start *
var result = function(a, b, callBackFunc){
	return callBackFunc(a,b)	
}
console.log(result(20, 10, function(a, b){
  return a + b;
}))
console.log(result(20, 10, function(a, b){
  return a - b;
}))
console.log(result(20, 10, function(a, b){
  return a * b;
}))

// * Your code End *
