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
    this.sectionsAboutTexts = document.querySelectorAll('.section-about__description, .section-our-team__header, .person__proffesion, .person__duties, .description-about-us__header, .description-about-us__text, .description-about-us__item, .section-why-is-worth__header, .rounded-icons__header, .counter__text');
    this.sectionAboutHeader = document.querySelector('.section-about__header');
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
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="index.html">about us</li></a> <li class = "menu__item"><a class = "menu__link" href="offers/offers.html">offer</li></a><li class = "menu__item"><a class = "menu__link" href="realizations/realizations.html">realizations</li></a><li class = "menu__item"><a class = "menu__link" href="news/news.html">news</li></a><li class = "menu__item"><a class = "menu__link" href="contact/contact.html">contact</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'pl';
          _this.sectionAboutHeader.innerHTML = 'ArtInt - beauty is our passion<span class="section-about__header--dots"></span><span class="section-about__header--cursor">|</span>';

          _changeLanguage(footerTranslation.eng, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationAbout.eng;

          _changeLanguage(sectionsAboutTranslation.eng, _this.sectionsAboutTexts);
        } else if (checkSessionStorage() === 'pl') {
          document.documentElement.lang = 'pl';
          _this.menuList.innerHTML = '<li class = "menu__item"><a class = "menu__link" href="index.html">o nas</li></a> <li class = "menu__item"><a class = "menu__link" href="offers/offers.html">oferta</li></a><li class = "menu__item"><a class = "menu__link" href="realizations/realizations.html">realizacje</li></a><li class = "menu__item"><a class = "menu__link" href="news/news.html">aktualności</li></a><li class = "menu__item"><a class = "menu__link" href="contact/contact.html">kontakt</li></a>';

          _this.menuList.appendChild(_this.menuLanguageButton);

          _this.menuLanguageButton.textContent = 'en';
          _this.sectionAboutHeader.innerHTML = 'ArtInt - piękno to nasza pasja<span class="section-about__header--dots"></span><span class="section-about__header--cursor">|</span>';

          _changeLanguage(footerTranslation.pl, _this.contactHeader);

          _this.sliderHeader.textContent = sliderTranslationAbout.pl;

          _changeLanguage(sectionsAboutTranslation.pl, _this.sectionsAboutTexts);
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