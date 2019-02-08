class MessageService {
	constructor() {
		this.messageContainer = document.querySelector('.news-wrap .row');
	}
	generateMessageTemplate() {
		return `<div class="container-news">
					<p>По вашему запросу ничего не найденно</p>
					<hr>
					<button class="btn-agree">Ok</button>
				</div>`
	}
	 addMessage() {
        const template = this.generateMessageTemplate();
        this.messageContainer.insertAdjacentHTML("afterbegin", template);
    }
    outMessage() {
    	const message = document.querySelector('.btn-agree');
    	message.addEventListener('click', () => uiService.clearContainer());
	}
 }