class SearchEngine {
    constructor () {
        this.input = document.querySelector('.searching__input');
        this.texts = [...document.querySelectorAll('.article__text')];
        this.articles = document.querySelectorAll('.article');
    }
    searchByText(){
        this.input.addEventListener('input', (e) => {
            const inputText = e.target.value.toLowerCase();
            this.articles.forEach((article) => {
                article.classList.add('article--off');
                if (inputText.length === 0) {
                article.classList.remove('article--off');
                }
            })
            const filteredTexts = this.texts.filter((text) => {
                return text.textContent.toLowerCase().includes(inputText);
            })
            filteredTexts.forEach((text) => { 
                text.parentElement.classList.remove('article--off');
            })
            
        })
    }
}


