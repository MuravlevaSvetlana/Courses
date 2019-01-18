// TASK 2


// exc 1


let ul = document.querySelector('ul');
ul.classList.add('list');
console.log(ul.classList);


// exc 2


let linkU = document.querySelector('span').nextElementSibling;
linkU.setAttribute('id', 'link');
console.log(linkU);


// exc 3


let li = document.querySelector('ul').children;
for (let i = 0; i<li.length; i += 2){
	li[i].classList.add('item');
}
console.log(li);


// exc 4


let links = document.links;
for (i = 0; i < links.length; i++){
	links[i].classList.add('custom-link');
}
console.log(links);

