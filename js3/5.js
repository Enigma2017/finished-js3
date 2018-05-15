// ## Методы перебора массива
//
// Задача создать 4 функции которые создают новый массив
// Во всех кейсах за основу берется массив itDepartment

var itDepartment = [
  { first: 'Philip', last: 'Bradley', born: 1979, possition: 'Back-end' },
  { first: 'Phil', last: 'Harmon', born: 1983, possition: 'Front-end' },
  { first: 'Marty', last: 'Ormond', born: 1991, possition: 'Front-end' },
  { first: 'Silvester', last: 'Rod', born: 1987, possition: 'QA' },
  { first: 'Johannes', last: 'Planck', born: 1971, possition: 'Front-end' },
  { first: 'Reynard', last: 'Christopher', born: 1973, possition: 'QA' },
  { first: 'Max', last: 'Forrest', born: 1988, possition: 'Manager' },
];

// * Your code Start *
var fullNames = itDepartment.map(function(names){
	var fullName = names.first + " " + names.last;
	return fullName;
});
console.dir(fullNames);

var filtered = itDepartment.filter(function(special){
	var filtered = special.possition;
	return filtered;
});
console.dir(filtered);

var sorted = itDepartment.sort(function(date1, date2){
	var year = new Date().getFullYear();
	return year - date1.born > year - date2.born;
});
console.dir(sorted);

const counter = itDepartment.reduce(function(prev, current) {
  const counter = current.possition;
  if (!prev[counter]){
  	prev[counter] = 0;
  }
  prev[counter] += 1;
  return prev;
}, {});
console.log(counter);


/* Your code End *

// map(); Создайте массив в котором будут имена и фамилии всех работников It департамента. (В формате Philip Bradley)
console.dir(fullNames);

// filter(); Отфильтруйте всех разработчиков (Developer) И выведете их имена и должности
console.dir(filtered);

// sort(); Отсортируйте массив по возрасту работников. По убыванию. ()Подсказака: используйте конструктор new Data())
console.dir(sorted);

// reduce(); Узнайте сколько всего разработчико разных должностей. Например:
// Front-end: 2,
// Back-end: 1,
// QA: 2
// Manager: 1

console.log(counter);*/