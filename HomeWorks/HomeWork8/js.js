
// exc 1

let btn_msg = document.getElementById('btn-msg');
let message = btn_msg.dataset.text;
btn_msg.addEventListener('click', () => {alert (message)});

// exc 2

btn_msg.addEventListener('mouseover', () => {
	btn_msg.classList.add('red_btn')
});

btn_msg.addEventListener('mouseout', () => {
	btn_msg.classList.remove('red_btn');
})

// exc 3

document.addEventListener('click', (event) => {
	let out = document.getElementById('tag');
	out.innerHTML = 'Tag:' + ' ' + event.target.tagName;
})

// exc 4

let btn_generate = document.getElementById('btn-generate');

btn_generate.addEventListener('click', () => {
	let ul = document.body.children[3];
	let li = ul.children;
	let newLi = document.createElement('li');
	ul.appendChild(newLi);
	newLi.textContent = 'Item' + ' ' + li.length;
});



