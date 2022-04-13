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

var Slider = /*#__PURE__*/function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.sliderImage = document.querySelector('.slider__image');
    this.arrows = document.querySelectorAll('.slider__arrow');
    this.slideList = [];
    this.dots = _toConsumableArray(document.querySelectorAll('.slider__dot'));
    this.index = 0;
    this.interval = '';
    this.time = 3000;
    this.breakpointForMediumImage = 640;
    this.breakpointForLargeImage = 1000;
  }

  _createClass(Slider, [{
    key: "changeSliderImageSize",
    value: function changeSliderImageSize() {
      var _this = this;

      var windowWidth = window.innerWidth;

      var checkSizeOfWindow = function checkSizeOfWindow() {
        if (windowWidth < _this.breakpointForMediumImage) {
          _this.slideList = ["images/image 1.3.jpg", "images/image 2.3.jpg", "images/image 3.3.jpg", "images/image 4.3.jpg"];
        } else if (windowWidth >= _this.breakpointForMediumImage && windowWidth < _this.breakpointForLargeImage) {
          _this.slideList = ["images/image 1.2.jpg", "images/image 2.2.jpg", "images/image 3.2.jpg", "images/image 4.2.jpg"];
        } else if (windowWidth >= _this.breakpointForLargeImage) {
          _this.slideList = ["images/image 1.1.jpg", "images/image 2.1.jpg", "images/image 3.1.jpg", "images/image 4.1.jpg"];
        }
      };

      checkSizeOfWindow();
      window.addEventListener('resize', function () {
        windowWidth = window.innerWidth;
        checkSizeOfWindow();
      });
    }
  }, {
    key: "changingImageByTime",
    value: function changingImageByTime() {
      var _this2 = this;

      this.changeSlide = function () {
        _this2.index++;

        if (_this2.index === _this2.slideList.length) {
          _this2.index = 0;
        }

        _this2.changeDot();

        _this2.sliderImage.src = _this2.slideList[_this2.index];
      };

      this.interval = setInterval(function () {
        _this2.changeSlide();
      }, this.time);
      this.changingImageByArrows();
    }
  }, {
    key: "changingImageByArrows",
    value: function changingImageByArrows() {
      var _this3 = this;

      this.arrows.forEach(function (arrow, arrowIndex) {
        return arrow.addEventListener('click', function () {
          clearInterval(_this3.interval);
          arrowIndex === 0 ? _this3.index++ : _this3.index--;

          if (_this3.index === _this3.slideList.length) {
            _this3.index = 0;
          } else if (_this3.index < 0) {
            _this3.index = _this3.slideList.length - 1;
          }

          _this3.sliderImage.src = _this3.slideList[_this3.index];

          _this3.changeDot();

          _this3.interval = setInterval(function () {
            _this3.changeSlide();
          }, _this3.time);
        });
      });
    }
  }, {
    key: "changeDot",
    value: function changeDot() {
      var activeDot = this.dots.findIndex(function (dot) {
        return dot.classList.contains("slider__dot--active");
      });
      this.dots[activeDot].classList.remove('slider__dot--active');
      this.dots[this.index].classList.add('slider__dot--active');
    }
  }]);

  return Slider;
}();