"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var hamburgerNavigation = /*#__PURE__*/function () {
  function hamburgerNavigation(hamburger) {
    _classCallCheck(this, hamburgerNavigation);

    this.hamburger = hamburger;
    this.menuList = document.querySelector('.menu__list');
  }

  _createClass(hamburgerNavigation, [{
    key: "toggleHamburger",
    value: function toggleHamburger() {
      for (var i = 0; i < this.hamburger.length; i++) {
        this.hamburger[i].classList.toggle('menu__hamburger--off');
      }
    }
  }, {
    key: "openingAndClosingMenuByClickingHamburger",
    value: function openingAndClosingMenuByClickingHamburger() {
      var _this = this;

      this.menuList.addEventListener('click', function () {
        return _this.closingListByClickingOnDocument();
      });
      this.toggleHamburger();
      this.menuList.classList.toggle('menu__list--on');

      if (this.menuList.classList.contains('menu__list--on')) {
        this.menuList.style.backgroundColor = "rgba(165, 174, 183, 0.85)";
      }
    }
  }, {
    key: "closingListByClickingOnDocument",
    value: function closingListByClickingOnDocument() {
      if (this.hamburger[0].classList.contains("menu__hamburger--off")) {
        this.menuList.classList.toggle("menu__list--on");
        this.toggleHamburger();
      }
    }
  }]);

  return hamburgerNavigation;
}();