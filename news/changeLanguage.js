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
    this.form = document.querySelector('.form');
    this.sectionsNewsTexts = document.querySelectorAll('.news__header, .article__date--smaller, .article__title, .article__text, .article__button');
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

          _this.sliderHeader.textContent = sliderTranslationNews.eng;
          _this.form.innerHTML = '<label class="searching form__searching">Search<input class="searching__input" type="search"></label>';

          _changeLanguage(sectionsNewsTranslation.eng, _this.sectionsNewsTexts);
        } else if (checkSessionStorage() === 'pl') {
          document.documentElement.lang = 'pl';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="../index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="../offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="../realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="../news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="../contact/contact.html">kontakt</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'en';

          _changeLanguage(footerTranslation.pl, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationNews.pl;
          _this.form.innerHTML = '<label class="searching form__searching">Szukaj<input class="searching__input" type="search"></label>';

          _changeLanguage(sectionsNewsTranslation.pl, _this.sectionsNewsTexts);
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