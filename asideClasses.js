"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BrandSlider = /*#__PURE__*/function () {
  function BrandSlider() {
    _classCallCheck(this, BrandSlider);

    this.root = document.documentElement;
    this.brandDisplayedElements = getComputedStyle(this.root).getPropertyValue('--brandDisplayedElements');
    this.brand = document.querySelector('.brand');
  }

  _createClass(BrandSlider, [{
    key: "slideBrands",
    value: function slideBrands() {
      this.root.style.setProperty("--brandElements", this.brand.children.length);

      for (var i = 0; i < this.brandDisplayedElements; i++) {
        this.brand.appendChild(this.brand.children[i].cloneNode(true));
      }
    }
  }]);

  return BrandSlider;
}();

var Counter = /*#__PURE__*/function () {
  function Counter() {
    _classCallCheck(this, Counter);

    this.years = 0;
    this.projects = 0;
    this.percent = 0;
    this.numberAdded = 1;
    this.aside = document.querySelector('.aside');
    this.counterNumbers = document.querySelectorAll('.counter__number');
    this.flag = true;
  }

  _createClass(Counter, [{
    key: "scrollToSection",
    value: function scrollToSection() {
      var _this = this;

      window.addEventListener('scroll', function () {
        var windowHeight = window.innerHeight;
        var positionOfAsideSection = _this.aside.offsetTop;
        var distanceToAsideSection = positionOfAsideSection - windowHeight;
        var scrollWindow = window.scrollY;

        if (scrollWindow >= distanceToAsideSection / 1.05 && _this.flag === true) {
          _this.startCounting();

          _this.flag = false;
        }
      });
    }
  }, {
    key: "startCounting",
    value: function startCounting() {
      var _this2 = this;

      var counter = function counter() {
        _this2.years === 8 ? _this2.years = 8 : _this2.years += _this2.numberAdded;
        _this2.projects === 121 ? clearInterval(counter) : _this2.projects += _this2.numberAdded;
        _this2.percent === 100 ? _this2.percent = 100 : _this2.percent += _this2.numberAdded;
        _this2.counterNumbers[0].innerHTML = "".concat(_this2.years);
        _this2.counterNumbers[1].innerHTML = "".concat(_this2.projects);
        _this2.counterNumbers[2].innerHTML = "".concat(_this2.percent);
      };

      setInterval(function () {
        counter();
      }, 20);
    }
  }]);

  return Counter;
}();