class changeLanguage {
    constructor () {
        this.menuList = document.querySelector('.menu__list');
        this.menuLanguageButton = document.querySelector('.menu__lang');
        this.contactHeader = document.querySelectorAll('.contact__header');
        this.sliderHeader = document.querySelector('.slider__header');
        this.sectionsContactTexts = document.querySelectorAll('.write-to-us__header, .comments__header, .form__rate-title');
        this.formPlaceholders = document.querySelectorAll('.form__name, .form__message');
        this.agreementCheckboxWriteToUs = document.querySelector('.form-wite-to-us__agreement-label');
        this.agreementCheckboxAddOpinion = document.querySelector('.form-add-comment__agreement-label');
        this.formSubmit = document.querySelectorAll('.form__submit');
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
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">contact</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'pl';
                changeLanguage(footerTranslation.eng, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationContact.eng;
                changeLanguage(sectionsContactTranslation.eng, this.sectionsContactTexts);
                changeLanguage(inputsPlaceholder.eng, this.formPlaceholders);
                changeLanguage(submitValues.eng, this.formSubmit);
                this.agreementCheckboxWriteToUs.innerHTML = '<label class = "form-wite-to-us__agreement-label form__agreement-label"><input type="checkbox" name = "agreement" required class = "form-write-to-us__agreement-input form__agreement-input">I consent to the processing of my personal data in order to contact the ArtInt company</label>';
                this.agreementCheckboxAddOpinion.innerHTML = '<label class = "form-add-comment__agreement-label form__agreement-label"><input type="checkbox" required class = "form-add-comment__agreement-input form__agreement-input">I consent to the processing of my personal data in order to express my opinion on the services provided by ArtInt</label>';
           }
           else if (checkSessionStorage() === 'pl') {
                document.documentElement.lang = 'pl';
                this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';
                this.menuList.appendChild(this.menuLanguageButton);
                this.menuLanguageButton.textContent = 'en';
                changeLanguage(footerTranslation.pl, this.contactHeader);
                this.sliderHeader.textContent = sliderTranslationContact.pl;
                changeLanguage(sectionsContactTranslation.pl, this.sectionsContactTexts);
                changeLanguage(inputsPlaceholder.pl, this.formPlaceholders);
                changeLanguage(submitValues.pl, this.formSubmit);
                this.agreementCheckboxWriteToUs.innerHTML = '<label class = "form-wite-to-us__agreement-label form__agreement-label"><input type="checkbox" name = "agreement" required class = "form-write-to-us__agreement-input form__agreement-input">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu skontaktowania się z firmą ArtInt</label>';
                this.agreementCheckboxAddOpinion.innerHTML = '<label class = "form-add-comment__agreement-label form__agreement-label"><input type="checkbox" required class = "form-add-comment__agreement-input form__agreement-input">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu wyrażenia opinii na temat usług udzielanych przez ArtInt</label>';
           }
        }
        translate();
        this.menuLanguageButton.addEventListener('click', () => {
            translate();
        })
    }
}