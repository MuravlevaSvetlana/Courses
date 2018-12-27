// OBJECTS.TASKS

// task 1

let userObject = {
	product: 'iphone'
};

//console.log(userObject);

//task 2

userObject.price = 1000;
userObject.currency = 'dollar';

//console.log(userObject);

// task 3

userObject.details = {model:'iPhone XS', color:'grey'};
//console.log(userObject);



// TRANSFORMATION OF PRIMITIVES

//task 1

let a = 0 || 'string';// a = 'string' так, как оператор || останавливается на true
let b = 1 && 'string';//b = 'string' так, как все операнды истина, то возвращает последнее
let c = null || 25;// c = 25 так, как null - false, возвращает истинное - 25
let d = null && 25;// d = null так, как оператор && возвращает первый false
let e = null || 0 || 35;// e = 35 так, как 35 единственное true, чтение происходит слева направо до первого true
let f = null && 0 && 35;// f = null так, как возвращается первое ложное

//task 2 

console.log(12 + 14 + '12');// 2612 сперва суммируются 12 и 14 = 26, потом 26 приводится в строку и объеденяется со строкой 12
console.log(3 + 2 - '1');//4 сперва суммируются 3 и 2, затем 1 приводится к числу так, как стоит математический знак - , получается 3+2-1
console.log('3' + 2 - 1);//31 сперва по знаку + 2 риводтся к строке и выходит строка 32, затем стоит знак - и число, следовательно строка 32 приводится к числу и получается пример 32-1
console.log(true + 2);//3 true приводится к числу и равняется 1, 1+2=3
console.log(+'10' + 1);//11 знак + перед строкой 10 приводит к числу 10, затем 10+1=11
console.log(undefined + 2);//при приоброзовании undefined к числу получаем NaN, NaN + число = NaN
console.log(null + 5);//5 при приобразовании к числу null = 0, 0+5=5
console.log(true + undefined);//Nan при приведении к числу true = 1 undefiend = Nan, NaN + 1 = NaN, но почему происходит приведение к числу, а не к булевому значению или к строке не знаю)


//IF ELSE. TASKS

// task 1

let userVariable = 'visible';

if (userVariable == 'hidden') {
	userVariable = 'visible';
	console.log(userVariable);
} else if (userVariable == 'visible'){
	userVariable = 'hidden';
	console.log(userVariable);
};

//task 2 

let userVariable2 = -5;

if (userVariable2 == 0){
	userVariable2 = 1;
	console.log(userVariable2);
} else if (userVariable2 < 0){
	userVariable2 = 'less then zero';
	console.log(userVariable2);
} else if (userVariable2 > 0){
	userVariable2 *= 10;
	console.log(userVariable2);
};

//task 3

let car = { 
	name: 'Lexus', 
	age: 10,
	create: 2008,
	needRepair: false 
};

if (car.age > 5 ){
	console.log('Need Repair');
	car.needRepair = true;
	//console.log(car.needRepair); 
} else {
	car.needRepair = false;
	//console.log(car.needRepair);
};

// task 4

let item = { 
	name: 'Intel core i7',
	price: '100$',
	discount: '15%'
}

if ('discount' in item) {
	if (item.discount !== undefined && parseFloat(item.discount) > 0){
		item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price)*parseFloat(item.discount)/100);
		console.log(item.priceWithDiscount + '$');
	}
} else {
	console.log(item.price);
};

//task 6

let product = {
    name: 'Яблоко',
    price: '15$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
	console.log(product.name);
} else {
	console.log('Товаров не найдено');
};

