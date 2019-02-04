// TASK 1

//exc 1


class Component {
	constructor (tagName = 'div'){
		this.tagName = tagName;
		this.node = document.createElement(this.tagName);
	}
}

const comp = new Component('section');


// exc 2


class Component2 {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(tagName);
	}

	setText(text) {
		this.node.textContent = text;
	}
}

const comp2 = new Component2();
comp2.setText('hi!');


// exc 3


class Calculatro  {
	constructor(value) {
		this.number = value;
	}

	set currentValue(value) {
		this.number = value;
	}

	get currentValue() {
		console.log(this.number);
	}

	plus(value) {
		this.number += value;
	}

	minus(value) {
		this.number -= value;
	}

	multiply(value) {
		this.number *= value;
	}

	divide(value) {
		this.number /= value;
	}
}


const calc = new Calculatro(0);
calc.currentValue = 25;
calc.plus(7);
calc.minus(2);
calc.multiply(10);
calc.divide(5);
calc.currentValue;


// TASK 2


class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/todos', (response) => {
   
    	const ul = document.querySelector('ul');
	function outUser(arr) {
		return `<li> ${arr.title}<ul class = "disp-none">
				<li> userId: ${arr.userId}</li>
				<li> id: ${arr.id}</li>
				<li> completed: ${arr.completed}</li>
				</ul>
				</li>`
	}

	(function add() {
		let arr = JSON.parse(response);
		for (let i = 0; i < arr.length; i++){
			const add = outUser(arr[i]);
			ul.insertAdjacentHTML('beforeend',add);
		} return arr;
	}());

	ul.addEventListener('click', (event) =>{
		if (event.target.tagName !== 'LI' || event.target.children.length === 0) return;
		if (event.target.tagName === 'LI' && event.target.children[0].tagName === 'UL') {
			event.target.children[0].classList.toggle('disp-none');
		} 
	});
});

