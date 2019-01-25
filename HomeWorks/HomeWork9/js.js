// TASK 1

// exc 1


const rectangle = {
	width: 10,
	height: 15,
	square: function getSquare() {
		return this.width * this.height;
	}
}
console.log(rectangle.square());


// exc 2

const price = {
	price: 10,
	discount: '15%',
	getPrice: function getPrice() {
		return this.price + '$';
	},
	getPriceWithDiscount: function getPriceWithDiscount() {
		return this.price - (this.price * parseFloat(this.discount) / 100) + '$';
	}
}
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());


// exc 3


const height = {
	height: 10,
	toIncrease: function(){
		return this.height += 1;
	}
}

console.log(height.toIncrease(), height.height);


// exc 4


const numerator = {
	value: 1,
	double: function () {
		this.value *= 2;
		return this;
	},
	plusOne: function () {
		this.value += 1;
		return this;
	},
	minusOne: function () {
		this.value -= 1;
		return this;
	} 
}

console.log(numerator.double().plusOne().minusOne(), numerator.value);


// TASK 2

// exc 1


function getAmount(){
		return this.quantity * this.price;
	}

const products = {
	quantity: 100,
	price: 2,
	amount: getAmount, 
}
console.log(products.amount());


// exc 2

const details = {
	  quantity: 50,
	  price: 2
}
console.log(getAmount.call(details));


// exc 3


let sizes = {
	width: 5,
	height: 10
};

getSquare = function () {
	return this.width * this.height
};

console.log(getSquare.call(sizes));


// exc 4


let element = {
	height: 25,
	getHeight: function() {
		return this.height;
	}
}

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());


// TASK 2 ARROW FUNCTIONS


let sum = (...arguments) => {
	const params = Array.prototype.slice.call(arguments);
	if (!params.length) return 0;
	return params.reduce ((prev,next) => prev + next);
}

//можно еще сильней укоротить функцию, но я не знаю еще функциональности строки 129, поэтому ее оставила
/*let sum = (...arguments) => {
	if (!arguments.length) return 0;
	return arguments.reduce ((prev,next) => prev + next);
}*/
console.log(sum(1,21,2,5));


// TASK 3 Деструктурирующее присваивание

//exc 1


function getObject(a,...rest) {
	let object = {};
	object.first = a;
	object.other = rest;
	return object;			
}
console.log(getObject(25,'36',58));


// exc 2


function getInfo ({name ='Unknown', info:{employees = [],partners = []}}){
	if (name === 'Unknown'){
		return `Name: ${name}
Partenrs: ${partners[0]} ${partners[1]}`;
	} else { // из условия задачи было не совсем ясно что именно выводить, если имя указано, поэтому вывела все
		employees = employees.join(' '); // сделано только с целью, чтоб выглядело как в примере на слайде без запятых
		partners = partners.join(' ');
 		return `Name: ${name}
Employees: ${employees}
Partenrs: ${partners}`;
	}
}

const organisation = {  
  name: 'Google',
  info: { employees: ['Vlad', 'Olga', 'Mark', 'Diana'], partners: ['Microsoft', 'Facebook', 'Xing']} 
};
console.log(getInfo(organisation));
