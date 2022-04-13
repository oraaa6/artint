"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SearchEngine = /*#__PURE__*/function () {
  function SearchEngine() {
    _classCallCheck(this, SearchEngine);

    this.input = document.querySelector('.searching__input');
    this.texts = _toConsumableArray(document.querySelectorAll('.article__text'));
    this.articles = document.querySelectorAll('.article');
  }

  _createClass(SearchEngine, [{
    key: "searchByText",
    value: function searchByText() {
      var _this = this;

      this.input.addEventListener('input', function (e) {
        var inputText = e.target.value.toLowerCase();

        _this.articles.forEach(function (article) {
          article.classList.add('article--off');

          if (inputText.length === 0) {
            article.classList.remove('article--off');
          }
        });

        var filteredTexts = _this.texts.filter(function (text) {
          return text.textContent.toLowerCase().includes(inputText);
        });

        filteredTexts.forEach(function (text) {
          text.parentElement.classList.remove('article--off');
        });
      });
    }
  }]);

  return SearchEngine;
}();