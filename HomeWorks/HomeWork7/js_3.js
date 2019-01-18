// TASK 3


// exc 1
function addLi(n) {
	let ul = document.querySelector('ul');
	let li = document.querySelector('ul').children;
	
	if (n > 0) {
		for (let i = 0; i < n; i++){
			let newLi = document.createElement('li');
			ul.appendChild(newLi);
			newLi.classList.add('new-item');
			newLi.textContent = 'Item' + ' ' + li.length;
		}
	} console.log(ul);
	return ul;
}

//addLi(8); // чтоб задача на сорт нормально отработала


// exc 2


let ul = document.querySelector('ul');
let links = ul.getElementsByTagName('a');

for (value of links){
	value.innerHTML = '<strong>'+ value.textContent + '<strong>';
}
console.log(ul);


// exc 3


let body = document.body;
let img = document.createElement('img');
body.insertAdjacentElement('afterbegin', img);
img.setAttribute('src', 'img.png');
img.setAttribute('alt', 'Логотип школы');


// exc 4


let mark = document.querySelector('mark');
mark.textContent += ' ' + 'green';
mark.classList.add('green');
console.log(mark);


// exc 5


let li = document.querySelector('ul').children;
let liMas = [];

for (var i = 0; i < li.length; i++) {
  liMas.push(li[i].firstChild.textContent);
}

liMas.reverse();

for (let i = 0; i<li.length;i++){
	li[i].firstChild.innerHTML = '<strong>' + liMas[i] + '</strong>';
}
console.log(liMas);


