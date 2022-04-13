class changeLanguage {
    constructor () {
        this.menuList = document.querySelector('.menu__list');
        this.menuLanguageButton = document.querySelector('.menu__lang');
        this.contactHeader = document.querySelectorAll('.contact__header');
        this.sliderHeader = document.querySelector('.slider__header');
        this.sectionsAboutTexts = document.querySelectorAll('.section-about__description, .section-our-team__header, .person__proffesion, .person__duties, .description-about-us__header, .description-about-us__text, .description-about-us__item, .section-why-is-worth__header, .rounded-icons__header, .counter__text');
        this.sectionAboutHeader = document.querySelector('.section-about__header');
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
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="contact/contact.html">contact</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'pl';
                this.sectionAboutHeader.innerHTML = 'ArtInt - beauty is our passion<span class="section-about__header--dots"></span><span class="section-about__header--cursor">|</span>';
                changeLanguage(footerTranslation.eng, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationAbout.eng;
                changeLanguage(sectionsAboutTranslation.eng, this.sectionsAboutTexts);
                
           }
           else if (checkSessionStorage() === 'pl') {
                document.documentElement.lang = 'pl';
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="contact/contact.html">kontakt</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'en';
                this.sectionAboutHeader.innerHTML = 'ArtInt - piękno to nasza pasja<span class="section-about__header--dots"></span><span class="section-about__header--cursor">|</span>';
                changeLanguage(footerTranslation.pl, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationAbout.pl;
                changeLanguage(sectionsAboutTranslation.pl, this.sectionsAboutTexts);
            } 
        }
        translate()
        this.menuLanguageButton.addEventListener('click', () => {
            translate();
        })
    }
}

