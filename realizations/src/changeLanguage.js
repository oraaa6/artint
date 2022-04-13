class changeLanguage {
    constructor () {
        this.menuList = document.querySelector('.menu__list');
        this.menuLanguageButton = document.querySelector('.menu__lang');
        this.contactHeader = document.querySelectorAll('.contact__header');
        this.sliderHeader = document.querySelector('.slider__header');
        this.sectionsRealizationsTexts = document.querySelectorAll('.gallery__header, .gallery__text');
    }
    changeLang() {
        const changeLanguage = (lang, elements) => {
            let array = Object.entries(lang);
            for(let i = 0; i < elements.length; i++) {
            elements[i].textContent = array[i][1];
            }
        }
        const translate = () => {
            if(checkSessionStorage() === 'en') {
                document.documentElement.lang = 'en';
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">contact</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'pl';
                changeLanguage(footerTranslation.eng, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationRealizations.eng;
                changeLanguage(sectionsRealizationsTranslation.eng, this.sectionsRealizationsTexts);
           }
           else if (checkSessionStorage() === 'pl') {
                document.documentElement.lang = 'pl';
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'en';
                changeLanguage(footerTranslation.pl, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationRealizations.pl;
                changeLanguage(sectionsRealizationsTranslation.pl, this.sectionsRealizationsTexts);
           }
        }
        translate()
        this.menuLanguageButton.addEventListener('click', () => {
           translate();
        })
    }
}