
// Task 1

let isParent = (parent, child) => {
	let allTags = parent.getElementsByTagName('*');
	let result;
	
	for (value of allTags) {
		result = value.tagName == child.tagName? true: false;// про tagName узнала, развернув в консоле HTML коллекцию, пока искала как правильно приравнять элементы
	}

	console.log(result);
	return result;
}

isParent(document.body.children[0], document.querySelector('mark'));


// Task 2


let allLinks = document.links;
let list = [];

for (value of allLinks){
	if (value.parentElement.parentElement.tagName !== 'UL'){
		list.push(value);
	}
}

console.log(list);

// Task 3


let ul = document.body.children[1];
let prev = ul.previousElementSibling;
let next = ul.nextElementSibling;

console.log(prev, next);


// Task 4


let li = ul.children;
console.log(li.length);// если достаточно получить только число


// Task 5

// Функция находится в файле todo_app.js


// Task 6

// Функцию на генерацию ID никак не меняла
