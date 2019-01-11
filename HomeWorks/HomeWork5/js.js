// Task 1

let string = '';

function highFunction(mas, func) {

	mas.forEach(function(item){
		func(item);
	}); 
	
	console.log('New value: ' + string);
	return string;
} 


// handler 1


let masOne = ['my', 'name', 'is', 'Trinity'];

function handlerUpperCase(item) {
	
	item = item.split('');
	item.forEach(function(it,i){
		
		if (i === 0){
			it = it.toUpperCase();
			string += it;
		} else {
			string += it;
		}

	})

	return string;
}


//highFunction(masOne, handlerUpperCase);


// handler 2


let masTwo = [10, 20, 30];

function handlerMulti(item) {

	item *= 10;
	string += item + ',' + ' ';
	return string;
}


//highFunction(masTwo, handlerMulti);


//handler 3 


let arr = [
	{
		age:45, 
		name: 'John'
	}, 
	{
		age:20, 
		name:'Aaron'
	}
];

function handlerArr(item) {
	
	string += item.name + ' is ' + item.age + ',';
	return string;
};


//highFunction(arr, handlerArr);


// handler 4


let masFour = ['abc', '123'];

function handlerRever(item) {

	item = item.split('');
	item.reverse();
	item = item.join('');
	string += item + ', ';
	return string;
}


highFunction (masFour, handlerRever);


// TASK 2


let masNumber = [ 5, 6, 7, 8, 9, 10]
let out = true;

function every(mas, func){

	if (typeof mas === 'object'){
		func(mas);
		console.log(out);
	} else {
		console.log ('Только массив чисел');
	}

	return out;
};


function handlerEvery(mas, item, i) {

	mas.forEach(function(item){
		if (item < 5) {
			out = false;
		} 
	}) 
};


every(masNumber, handlerEvery);


// TASK 3


// exc 1


let masNumber2 = [1,2,3,4,5,6,7,8,9,10];

let masNumberOut = masNumber2.map(function(num) {

	if (num % 2) {
		return {
			digit:num,
			odd: true
		}
	} else {
		return {
			digit:num,
			odd: false
		}
	}
})


console.log(masNumberOut);


// exc 2


let num = [12, 4, 50, 1, 0, 18, 40];

let everyNum = num.every(function(val) {
	return val !== 0;
});


console.log(everyNum);


// exc 3 


let str = ['yes', 'hello', 'no', 'easycode', 'what'];

let somestr = str.some(function(val) {
	return val.length > 3;
})


console.log(somestr);


// exc 4


let letters = [
	{
		char:"a",
		index:12
	}, 
	{
		char:"w",
		index:8
	}, 
	{
		char:"Y",
		index:10
	}, 
	{
		char:"p",
		index:3
	}, 
	{
		char:"p",
		index:2
	},
	{
		char:"N",
		index:6
	}, 
	{
		char:" ",
		index:5
	}, 
	{
		char:"y",
		index:4
	}, 
	{
		char:"r",
		index:13
	}, 
	{
		char:"H",
		index:0
	},
	{
		char:"e",
		index:11
	}, 
	{
		char:"a",
		index:1
	}, 
	{
		char:" ",
		index:9
	}, 
	{
		char:"!",
		index:14
	}, 
	{
		char:"e",
		index:7
	}
];


function getWord(mas) {

	mas.sort(function(prev, next){
		return prev.index - next.index;
	});
	 

	let word = mas.reduce(function (prev, current){
		return prev += current.char;
	}, '');

	console.log(word);
	return word;
}


getWord(letters);


// exc 5


let numMas = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

numMas.sort(function(prev, next) {
	return prev.length - next.length;
});


console.log (numMas);


// exc 6


let masCores = [
    {
    	cpu: 'intel', 
    	info: {
    		cores:2, 
    		сache: 3
    	}
    },
    {
    	cpu: 'intel',
    	info: {
    		cores:4,
    		сache: 4
    	}
    },
    {
    	cpu: 'amd', 
    	info: {
    		cores:1,
    		сache: 1
    	}
    },
    {
    	cpu: 'intel',
    	info: {
    		cores:3,
    		сache: 2
    	}
    },
    {
    	cpu: 'amd',
    	info: {
    		cores:4,
    		сache: 2
    	}
    }
];

// этот вариант решения если по возрастанию - это значит от меньшего к большему
/*masCores.sort(function(prev, next){
	return prev.info.cores - next.info.cores;
});*/

// этот вариант решения если по возрастанию - это значит от большего к меньшему
masCores.sort(function(prev, next){
	return next.info.cores - prev.info.cores;
});


console.log(masCores);
