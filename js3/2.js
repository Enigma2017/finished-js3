// ## Замыкания
//
// Посмотрите на код внизу
// Обьясните почему он работает именно так
// Перепишите код так, что б он работал корректно. Если значете несколько вариантов, напишите их


// * Your code Start *

var funcArrays = function () {
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function(i) {
    	return function(){
    		return i;
    	}
    }(i));
  }

  return arr;
}

// * Your code End *

var func = funcArrays();

console.log(func[1]()); // Выводит 5, а должно вывести 1
console.log(func[3]()); // Выводит 5, а должно вывести 3