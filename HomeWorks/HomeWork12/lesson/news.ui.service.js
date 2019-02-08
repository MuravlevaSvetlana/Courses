class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        const template = NewsUI.generateArticleTemplate(article);
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }


    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }
    // Разница по времени вышла больше примерно в 14 раз
     /**
     * 
     * @param {Object} article 
     */
    /*static generateArticleTemplate(article) {
        const div = document.createElement('div');
        const divCard = document.createElement('div');
        const divImage = document.createElement('div');
        const divContent = document.createElement('div');
        const divAction = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');
        const p = document.createElement('p');
        const a = document.createElement('a');
        div.classList.add('col');
        div.classList.add('s12'); 
        div.classList.add('m6');
        divCard.classList.add('card');
        divImage.classList.add('card-image');
        divContent.classList.add('card-content');
        span.classList.add('card-title');
        img.setAttribute('src',article.urlToImage);
        divAction.classList.add('card-action');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        const main = document.querySelector('.news-wrap .row');
        main.insertAdjacentElement('afterbegin', div);
        const allDiv = main.getElementsByTagName('div');
        allDiv[0].insertAdjacentElement('afterbegin', divCard);
        allDiv[1].insertAdjacentElement('afterbegin', divImage);
        allDiv[1].appendChild(divContent);
        allDiv[1].appendChild(divAction);
        allDiv[2].appendChild(img);
        allDiv[3].appendChild(span);
        allDiv[3].appendChild(p);
        allDiv[4].appendChild(a);
        allDiv[3].firstElementChild.innerHTML = article.title || '';
        allDiv[3].lastElementChild.innerHTML = article.description || '';
        allDiv[4].firstElementChild.innerHTML = 'Read more';
    }*/
}