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
    this.sectionsOfferTexts = document.querySelectorAll('.types-of-packages__title, .type-of-package__name, .type-of-package__meters, .type-of-package__text, .project-description__header, .project-description__text, .project-description__button, .parts__title');
    this.partsContainer = document.querySelector('.parts__container');
  }

  _createClass(changeLanguage, [{
    key: "changeLang",
    value: function changeLang() {
      var _this = this;

      var _changeLanguage = function _changeLanguage(lang, elements) {
        var array = Object.entries(lang);

        for (var i = 0; i < elements.length; i++) {
          elements[i].textContent = array[i][1];
        }
      };

      var translate = function translate() {
        if (checkSessionStorage() === 'en') {
          document.documentElement.lang = 'en';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">contact</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'pl';

          _changeLanguage(footerTranslation.eng, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationOffer.eng;

          _changeLanguage(sectionsOfferTranslation.eng, _this.sectionsOfferTexts);

          _this.partsContainer.innerHTML = '<div class="parts__part">Preliminary agreement<div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Consultation with the team <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Choice of materials<div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Project preparation<div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Main agreement <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Home improvment works<div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Apartment cleaning <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Final acceptance <div class="parts__dot parts__dot--left">✠</div> </div>';
        } else if (checkSessionStorage() === 'pl') {
          document.documentElement.lang = 'pl';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'en';

          _changeLanguage(footerTranslation.pl, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationOffer.pl;

          _changeLanguage(sectionsOfferTranslation.pl, _this.sectionsOfferTexts);

          _this.partsContainer.innerHTML = '<div class="parts__part">Umowa wstępna <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Konsultacja z zespołem <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Wybór materiałów <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Wykonanie projektu <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Umowa docelowa <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Wykończenie <div class="parts__dot parts__dot--left">✠</div> </div> <div class="parts__part">Sprzątanie mieszkania <div class="parts__dot parts__dot--right">✠</div> </div> <div class="parts__part">Odbiór mieszkania <div class="parts__dot parts__dot--left">✠</div> </div>';
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