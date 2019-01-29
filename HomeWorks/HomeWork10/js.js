// TASK 1 Замыкание

// exc 1


function minus(a = 0) {
	return function(b = 0) {
		return console.log(a - b);
	}
};

minus()(6);


// exc 2


function multiplyMaker(a) {
	let currentNum = a;
	return function (b = 1) {
		return console.log(currentNum *= b);
	} 
}

let multiNum = multiplyMaker(2);
multiNum(6);
multiNum(10);


// exc 3


const string = (function makeString() {
	let string = '';
	
	function setString(value = '') {
		if (typeof value !== 'string'){
			value += '';
		}
		string = value;
		return string;
	}

	function outString() {
		return console.log(string);
	}

	function lengthString() {
		return console.log(string.length);
	}

	function reverseString() {
		let revString = '';
		for (let i = string.length-1; i >= 0; i--){
			revString += string[i];
		}
		return console.log(revString);
	}

	return {
		setString: setString,
		outString: outString,
		lengthString: lengthString,
		reverseString: reverseString
	}
}());

string.setString('easycode');
string.outString();
string.lengthString();
string.reverseString();


// exc 4


let calculate = (function calculator() {
	let num;

	function setNum(value) {
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num = parseFloat(value);
		return calculate;
	}

	function plusNum(value) {
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num += parseFloat(value);
		return calculate;
	}

	function multiplyNum(value) {
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num *= parseFloat(value);
		return calculate;
	}

	function minusNum(value) {
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num -= parseFloat(value);
		return calculate;

	}

	function divisionNum(value){
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num /= parseFloat(value);
		return calculate;
	}

	function powerNum(value) {
		if (typeof value !== 'number') console.log('Введите числовое значение');
		num = Math.pow(num, value);
		return calculate;
	}

		function outNum() {
		num = Math.round(parseFloat(num)*100)/100;
		console.log(num);
		return calculate;
	}

	return {
		setNum: setNum,
		plusNum: plusNum,
		multiplyNum: multiplyNum,
		minusNum: minusNum,
		divisionNum: divisionNum,
		powerNum: powerNum,
		outNum: outNum
	}


}());

//calculate.setNum(3);
//calculate.multiplyNum(3);
//calculate.minusNum(1);
//calculate.divisionNum(3);
//calculate.powerNum(3);
//calculate.outNum();
calculate.setNum(3.5788).multiplyNum(3).minusNum(1).divisionNum(3).powerNum(3).outNum();


// TASK 2 Конструкторы

// exc 1

function getCar(label = 'Unknown', age = 0) {
	this.label = label;
	this.age = age;

	this.getLabel = function() {
		if (typeof this.label === 'string'){
			this.label = this.label[0].toUpperCase() + this.label.slice(1);
			return console.log(this.label);
		}
	}

	this.getYear = function() {
		let currentYear = new Date();
		return console.log(currentYear.getFullYear() - parseFloat(age));
	}
}

let car = new getCar('lexus','56');
car.getLabel();
car.getYear();


// exc 2


function encryptStr(string = '') {

	this.showString = function () {
		if (typeof string !== 'string') return console.log('Введите строку');
		return console.log(string);
	}

	this.showEncryptString = function () {
		if (typeof string !== 'string') return console.log('Введите строку');
		let enStr = '';
		for (let value of string) {
			enStr += value.charCodeAt(value) + ' ';
		} 
		string = enStr;
		return console.log(string);
	} 
}

let encryptString = new encryptStr('my name is Sveta');
encryptString.showString();
encryptString.showEncryptString();
