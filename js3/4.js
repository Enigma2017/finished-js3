//## Работа с массивами
// Совсестите массив и строку с именами именно в таком порядке, как показанно в комментариях в строке.
// Порядок действий:
// * Разберите namesString на массив
// * Добавьте новый массив в oldArray, после первого элемента массива
// * Сделайте инверсию массива
// * Превтатите полученный массив в строк использую разделитель '|'
// * Your code Start *


var oldArray = ['Dave Burt', 'Sylvanus Jeremiah'];
var namesString = 'Hartley Evander, Kole Grady';
var arr = namesString.split(', ');
for (var i = 0; i < arr.length; i++) {
  oldArray.splice(i + 1, 0, arr[i]);
}
//console.log(oldArray);
var reverArr = oldArray.reverse();
var fullRevertArrayString = reverArr.join(' | ');
console.log(fullRevertArrayString);

// * Your code End *

/*console.log(fullRevertArrayString) // Должен вывести - 'Sylvanus Jeremiah | Kole Grady | Hartley Evander | Dave Burt'*/