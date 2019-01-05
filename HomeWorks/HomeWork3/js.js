// TASK 1

let a = 'inlineo';

switch (a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
}



// TASK 2



// exc 1



let uservariable = 'visible';
uservariable === 'hidden'? uservariable = 'visible': uservariable = 'hidden';

//console.log(uservariable);



// exc 2



let uservariable2 = 2;
uservariable2 === 0? uservariable2 = 1: uservariable2 < 0? uservariable2 = 'less then zero': uservariable2*=10;

//console.log(uservariable2);



// exc 3



let car = { 
	name: 'Lexus', 
	age: 10, 
	create: 2008, 
	needRepair: false 
}

car.age > 5? car.needRepair = true: car.needRepair = false;

//console.log(car);



// TASK 3



// exc 1



let string  = 'i am in the easycode';
let newString = '';


for (let i = 0; i < string.length; i++){
	if (i === 0){
		newString += string[i].toUpperCase();
	} else if (string [i-1] === ' '){
		newString +=string[i].toUpperCase();
	}else {
		newString += string[i];
	}
}
console.log(newString);




// exc 2



let stringBack = 'tseb eht ma i';
let newStringBack = '';

for (let i = stringBack.length-1; i >= 0; i--){
	newStringBack += stringBack[i];
}

console.log(newStringBack);



// exc 3


let n = 7;
let result;
let mas = [];


	if (n < 0){
		console.log('Только положительное значение');// факториал отрицательных чисел не считается 
	} else {
		for (let i = 1; i <= n; i++){
			mas.push(i);//https://learn.javascript.ru/array добавление в массив
		}
		result = 1;//записала сразу в условии так, как факториал даже нуля равен еденицы
		for (let value of mas) {
			result *= value;
		} 

	} 

console.log(result);


// exc 4



let stringSpace = 'JavaScript is a pretty good language';
let newStringSpace = '' ;

for (let i = 0; i < stringSpace.length; i++){
	if (stringSpace[i] === ' '){
		continue;
		console.log(newStringSpace);
	} else if (stringSpace [i-1] === ' '){
		newStringSpace +=stringSpace[i].toUpperCase();
	}else {
		newStringSpace += stringSpace[i];
	}

}
console.log(newStringSpace);



// exc 5


let n2 = 15;
let numbers = [];


for (let i = 1; i <= n2; i++){
	numbers.push(i);
} 


for (let value of numbers){
	if (value % 2 !== 0) {
		console.log(value);
	} else {
		continue
	}
}


// exc 6


let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list) {
	if (typeof list[key] === 'string'){
		list[key] = list[key].toUpperCase();
	} else {
		continue;
	}
}
console.log(list);
