
let ul = document.body.children[0];
ul.addEventListener('click', (event) => {
	let target = event.target;
	let parent = target.parentElement.parentElement;

	if ( parent.tagName === 'BODY' || target.parentElement.children.length === 1) return;
	if (target.tagName === 'SPAN' || target.nextElementSibling.classList.contains('d-none')) {
		target.nextElementSibling.classList.toggle('d-none');
		let all = document.querySelectorAll('.dropdown-menu');
		for (let i = 0; i < all.length; i++){
			if (!all[i].classList.contains('d-none') && all[i].previousElementSibling !== target){
				all[i].classList.add('d-none');
			}
		}			
	} else {
		return;
	}
})
















