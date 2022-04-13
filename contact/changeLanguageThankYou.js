"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var changeLanguage = /*#__PURE__*/function () {
  function changeLanguage() {
    _classCallCheck(this, changeLanguage);

    this.thanksTexts = document.querySelector('.thank-you, .thank-you__button');
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
          _this.menuLanguageButton.textContent = 'pl';

          _changeLanguage(thankYou.eng, _this.thanksTexts);
        } else if (checkSessionStorage() === 'pl') {
          document.documentElement.lang = 'pl';
          _this.menuLanguageButton.textContent = 'en';

          _changeLanguage(thankYou.pl, _this.thanksTexts);
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