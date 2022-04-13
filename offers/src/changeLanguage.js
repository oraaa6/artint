class changeLanguage {
    constructor () {
        this.menuList = document.querySelector('.menu__list');
        this.menuLanguageButton = document.querySelector('.menu__lang');
        this.contactHeader = document.querySelectorAll('.contact__header');
        this.sliderHeader = document.querySelector('.slider__header');
        this.sectionsOfferTexts = document.querySelectorAll('.types-of-packages__title, .type-of-package__name, .type-of-package__meters, .type-of-package__text, .project-description__header, .project-description__text, .project-description__button, .parts__title');
        this.partsContainer = document.querySelector('.parts__container');
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
                this.sliderHeader.textContent = sliderTranslationOffer.eng;
                changeLanguage(sectionsOfferTranslation.eng, this.sectionsOfferTexts);
                this.partsContainer.innerHTML = '<div class="parts__part">Preliminary agreement<div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Consultation with the team <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Choice of materials<div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Project preparation<div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Main agreement <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Home improvment works<div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Apartment cleaning <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Final acceptance <div class="parts__dot parts__dot--left">✠</div> </div>';
           }
           else if (checkSessionStorage() === 'pl') {
                document.documentElement.lang = 'pl';
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'en';
                changeLanguage(footerTranslation.pl, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationOffer.pl;
                changeLanguage(sectionsOfferTranslation.pl, this.sectionsOfferTexts);
                this.partsContainer.innerHTML = '<div class="parts__part">Umowa wstępna <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Konsultacja z zespołem <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Wybór materiałów <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Wykonanie projektu <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Umowa docelowa <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Wykończenie <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Sprzątanie mieszkania <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Odbiór mieszkania <div class="parts__dot parts__dot--left">✠</div> </div>';
           }
        }
        translate()
        this.menuLanguageButton.addEventListener('click', () => {
            translate();
        })
    }
}