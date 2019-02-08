const newsService = new NewsService();
const uiService = new NewsUI();
const messageService = new MessageService();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const keyWord = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;
        uiService.clearContainer();
        articles.forEach((article) => uiService.addArticle(article));
    });
};

function onKeyWord(event) {
    const q = keyWord.value;
    if (q.length >= 3){
        newsService.getTopHeadlinesNewsByKeyWord(q, (response) => {
            if (!response.articles.length){
                uiService.clearContainer(); 
                messageService.addMessage();
                messageService.outMessage();
                return
            };
            const { totalResults, articles } = response;
            uiService.clearContainer();
            articles.forEach((article) => uiService.addArticle(article));
        })
    }
};

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
keyWord.addEventListener('keyup', onKeyWord);


