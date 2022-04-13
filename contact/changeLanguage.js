"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var changeLanguage = /*#__PURE__*/function () {
  function changeLanguage() {
    _classCallCheck(this, changeLanguage);

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

  _createClass(changeLanguage, [{
    key: "changeLang",
    value: function changeLang() {
      var _this = this;

      var _changeLanguage = function _changeLanguage(lang, elements) {
        var array = Object.entries(lang);

        for (var i = 0; i < elements.length; i++) {
          if (elements[i].placeholder) {
            elements[i].placeholder = array[i][1];
          } else if (elements[i].value) {
            elements[i].value = array[i][1];
          } else {
            elements[i].textContent = array[i][1];
          }
        }
      };

      var translate = function translate() {
        if (checkSessionStorage() === 'en') {
          document.documentElement.lang = 'en';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">contact</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'pl';

          _changeLanguage(footerTranslation.eng, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationContact.eng;

          _changeLanguage(sectionsContactTranslation.eng, _this.sectionsContactTexts);

          _changeLanguage(inputsPlaceholder.eng, _this.formPlaceholders);

          _changeLanguage(submitValues.eng, _this.formSubmit);

          _this.agreementCheckboxWriteToUs.innerHTML = '<label class = "form-wite-to-us__agreement-label form__agreement-label"><input type="checkbox" name = "agreement" required class = "form-write-to-us__agreement-input form__agreement-input">I consent to the processing of my personal data in order to contact the ArtInt company</label>';
          _this.agreementCheckboxAddOpinion.innerHTML = '<label class = "form-add-comment__agreement-label form__agreement-label"><input type="checkbox" required class = "form-add-comment__agreement-input form__agreement-input">I consent to the processing of my personal data in order to express my opinion on the services provided by ArtInt</label>';
        } else if (checkSessionStorage() === 'pl') {
          document.documentElement.lang = 'pl';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'en';

          _changeLanguage(footerTranslation.pl, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationContact.pl;

          _changeLanguage(sectionsContactTranslation.pl, _this.sectionsContactTexts);

          _changeLanguage(inputsPlaceholder.pl, _this.formPlaceholders);

          _changeLanguage(submitValues.pl, _this.formSubmit);

          _this.agreementCheckboxWriteToUs.innerHTML = '<label class = "form-wite-to-us__agreement-label form__agreement-label"><input type="checkbox" name = "agreement" required class = "form-write-to-us__agreement-input form__agreement-input">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu skontaktowania się z firmą ArtInt</label>';
          _this.agreementCheckboxAddOpinion.innerHTML = '<label class = "form-add-comment__agreement-label form__agreement-label"><input type="checkbox" required class = "form-add-comment__agreement-input form__agreement-input">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu wyrażenia opinii na temat usług udzielanych przez ArtInt</label>';
        }
      };

      translate();
      this.menuLanguageButton.addEventListener('click', function () {
        translate();
      });
    }
  }]);

  return changeLanguage;
}();