// 1
const head = document.head;
console.log(head);

//2
const body = document.body;
console.log(body);

//3
const childBody = body.children;
console.log(childBody);

//4
const divChild = body.firstElementChild;
console.log(divChild); 

	//a
	const divNode = divChild.childNodes;
	console.log(divNode);

	//б
	const divNodeExc = [];
	for (let i = 1; i < divNode.length-1; i++){
		divNodeExc.push(divNode[i]);
	} 
	console.log(divNodeExc);
	
