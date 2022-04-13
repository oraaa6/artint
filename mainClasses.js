"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ShowTeam = /*#__PURE__*/function () {
  function ShowTeam() {
    _classCallCheck(this, ShowTeam);

    this.persons = document.querySelectorAll('.person__image');
  }

  _createClass(ShowTeam, [{
    key: "showingPerson",
    value: function showingPerson() {
      var _this = this;

      window.addEventListener('scroll', function () {
        var scrollWindow = window.scrollY;

        _this.persons.forEach(function (person) {
          if (scrollWindow / 0.85 >= person.offsetTop) {
            person.classList.add('person__image--show');
          }
        });
      });
    }
  }]);

  return ShowTeam;
}();

var AddingDots = /*#__PURE__*/function () {
  function AddingDots() {
    _classCallCheck(this, AddingDots);

    this.dot = ".";
    this.cursorSpan = document.querySelector('.section-about__header--cursor');
    this.time = 800;
  }

  _createClass(AddingDots, [{
    key: "addDots",
    value: function addDots() {
      var _this2 = this;

      setInterval(function () {
        var headerOfAboutSection = document.querySelector('.section-about__header--dots');

        if (headerOfAboutSection.textContent.length >= 4) {
          setTimeout(function () {
            headerOfAboutSection.textContent = '';
          }, _this2.time / 2);
        }

        setTimeout(function () {
          headerOfAboutSection.textContent += _this2.dot;
        }, _this2.time / 2);
      }, this.time);
      this.blinkCursor();
    }
  }, {
    key: "blinkCursor",
    value: function blinkCursor() {
      var _this3 = this;

      setInterval(function () {
        _this3.cursorSpan.style.opacity = '0';
        setTimeout(function () {
          _this3.cursorSpan.style.opacity = '1';
        }, _this3.time / 2);
      }, this.time);
    }
  }]);

  return AddingDots;
}();