"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChangingSizeOfImage = /*#__PURE__*/function () {
  function ChangingSizeOfImage() {
    _classCallCheck(this, ChangingSizeOfImage);

    this.headerImage = document.querySelector('.slider__image');
    this.breakpointForMediumImage = 640;
    this.breakpointForLargeImage = 1000;
    this.smallImage;
    this.mediumImage;
    this.largeImage;
    this.path = window.location.pathname.split('/');
  }

  _createClass(ChangingSizeOfImage, [{
    key: "changeHeaderImageSize",
    value: function changeHeaderImageSize() {
      var _this = this;

      var windowWidth = window.innerWidth;

      if (this.path[this.path.length - 1] === 'offers.html') {
        this.smallImage = "../images/offersImage3.jpg";
        this.mediumImage = "../images/offersImage2.jpg";
        this.largeImage = "../images/offersImage1.jpg";
      } else if (this.path[this.path.length - 1] === 'realizations.html') {
        this.smallImage = "../images/realizationsImage3.jpg";
        this.mediumImage = "../images/realizationsImage2.jpg";
        this.largeImage = "../images/realizationsImage1.jpg";
      } else if (this.path[this.path.length - 1] === 'news.html') {
        this.smallImage = "../images/news3.jpg";
        this.mediumImage = "../images/news2.jpg";
        this.largeImage = "../images/news1.jpg";
      } else if (this.path[this.path.length - 1] === 'contact.html') {
        this.smallImage = "../images/contactImage3.jpg";
        this.mediumImage = "../images/contactImage2.jpg";
        this.largeImage = "../images/contactImage1.jpg";
      }

      var checkSizeOfWindow = function checkSizeOfWindow() {
        if (windowWidth < _this.breakpointForMediumImage) {
          _this.headerImage.src = _this.smallImage;
        } else if (windowWidth >= _this.breakpointForMediumImage && windowWidth < _this.breakpointForLargeImage) {
          _this.headerImage.src = _this.mediumImage;
        } else if (windowWidth >= _this.breakpointForLargeImage) {
          _this.headerImage.src = _this.largeImage;
        }
      };

      checkSizeOfWindow();
      window.addEventListener('resize', function () {
        windowWidth = window.innerWidth;
        checkSizeOfWindow();
      });
    }
  }]);

  return ChangingSizeOfImage;
}();