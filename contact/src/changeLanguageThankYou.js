class changeLanguage {
    constructor () {
        this.thanksTexts = document.querySelector('.thank-you, .thank-you__button');
    }
    changeLang() {
        const changeLanguage = (lang, elements) => {
            let array = Object.entries(lang);
            for(let i = 0; i < elements.length; i++) {
                if (elements[i].placeholder) {
                    elements[i].placeholder = array[i][1];
                }
                else if (elements[i].value) {
                    elements[i].value = array[i][1];
                }
                else {
            elements[i].textContent = array[i][1];
                }
            }
        }
        const translate = () => {
            if(checkSessionStorage() === 'en') {
                document.documentElement.lang = 'en';
                this.menuLanguageButton.textContent = 'pl';
                changeLanguage(thankYou.eng, this.thanksTexts);
           }
           else if (checkSessionStorage() === 'pl') {
                document.documentElement.lang = 'pl';
                this.menuLanguageButton.textContent = 'en';
                changeLanguage(thankYou.pl, this.thanksTexts);
           }
        }
        translate();
        this.menuLanguageButton.addEventListener('click', () => {
            translate();
        })
    }
}

// CHANGE LANGUAGE
const switchLanguage = new changeLanguage();
switchLanguage.changeLang();