// Exc 1



function multiply() {
	let result = 1;
	if (arguments.length === 0){
		result = 0;

	} else {
		for (let i = 0; i < arguments.length; i++){
			result *= arguments[i];
		}

	}
	console.log(result);
	return result;
}

multiply(4,8,10,58);



// Exc 2




function reverString(a) {
	let mas;
	let reverseString = '';

	if (typeof a === 'string') {  //решила что нужна проверка так, как в задании сказано принимает именно строку
		mas = a.split('');
		mas.reverse();
		reverseString = mas.join('');
		
	} else {
		reverseString = 'Только строки';
		
}
	console.log(reverseString);
	return reverseString;

}

reverString ('test');



// Exc 3




function outCode(a){
	let mas;
	let stringOut = [];

	if (typeof a === 'string') {
		mas = a.split('');

		for (let value of mas){
			stringOut += value.charCodeAt(value) + ' ';
		} 

	} else {
		stringOut = 'Только строки'
		
	}
	console.log(stringOut);
	return stringOut;
}

 outCode('hello');


// Exc 4


function guessNumber(a) {
	let resultNumber;
	let systemNumber;

	if (a > 10) {
		resultNumber = 'Число больше 10';

	} else if (a <= 0) {
		resultNumber = 'Число меньше 1';

	} else {
		systemNumber = Math.floor(Math.random() * (11 - 1)) + 1;

		if (systemNumber !== a){
			resultNumber = 'Вы не угадали ваше число' + ' ' + a + ' ' + 'а выпало число' + ' ' + systemNumber;
		} else {
			resultNumber = 'Вы угадали';
		}
	}
	console.log(resultNumber);
	return resultNumber;
}

guessNumber(8);


// Exc 5


function getArray(a) {
	let mas = [];

	for (let i = 1; i <= a; i++){
		mas.push(i)
	}
	console.log(mas);
	return mas;
}

getArray(10);


// Exc 6


let arr = [1,2,3];

function getDoubleArray(a) {
	let arr2 = arr.concat(arr)
	console.log(arr2);
	return arr2;
}

getDoubleArray(arr);


// Exc 7


let array = [[1, 2, 3], ['a', 'b', 'c'], [5,7,8,10,4], ['ava', 'bbb', 'cvg']];

function changeCollection(arr) {
	for (let i of array){
		i.splice(0,1);
	}
	console.log(array);
	return array;	
}

changeCollection(array);


// Exc 8


let users = [{name:'Denis', age:'29', gender:'male'}, {name:'Ivan', age:'20', gender:'male'}, {name:'Svetlana', age:'24', gender:'female'} ];



function getGender (key_1, key_2){
	let out = [];
	for (let i of users){
		if (i[key_1] === key_2){
			out.push(i);
			
		} else {
			continue;
		}
	}
	console.log(out);
}

getGender('gender', 'male');