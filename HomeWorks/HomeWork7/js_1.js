// TASK 1

//exc 1
let p = document.querySelector('p').textContent
console.log(p);


// exc 2

function infNode(node) {
	let res = {};
	res.type = node.nodeType;
	res.name = node.nodeName;
	res.quantity = node.childNodes.length === 0? res.quantity = node.childNodes.length: res.quantity = node.childNodes.length+1;
	console.log(res);
	return res;
	
}

infNode(document.body.children[2]);


// exc 3


let ulMas = document.querySelector('ul').children;
let resMas = [];
for (let i = 0; i<ulMas.length; i++){
	resMas.push(ulMas[i].textContent);
}
console.log(resMas);


// exc 4


let pNodes = document.querySelector('p').childNodes;

pNodes.forEach(function(textNode){
	if (textNode.nodeType === 3){
		textNode.nodeValue = '-text-';
	}
})

console.log(document.querySelector('p'));


