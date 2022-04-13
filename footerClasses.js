"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChangeFooterImage = /*#__PURE__*/function () {
  function ChangeFooterImage() {
    _classCallCheck(this, ChangeFooterImage);

    this.breakpointForLargeImage = 1240;
    this.footerBg = document.querySelector('.footer');
    this.smallImage = 'url(images/footer1.jpg)';
    this.bigImage = 'url(images/footer2.jpg)';
    this.path = window.location.pathname.split('/');
  }

  _createClass(ChangeFooterImage, [{
    key: "changeFooterImageSize",
    value: function changeFooterImageSize() {
      var _this = this;

      var windowWidth = window.innerWidth;

      var checkSizeOfWindow = function checkSizeOfWindow() {
        if (_this.path[_this.path.length - 1] !== 'index.html') {
          _this.footerBg.style.backgroundImage = 'url(../images/footer1.jpg)';
          _this.bigImage = 'url(../images/footer2.jpg)';
          _this.smallImage = 'url(../images/footer1.jpg)';
        }

        if (windowWidth <= _this.breakpointForLargeImage) {
          _this.footerBg.style.backgroundImage = _this.smallImage;
        } else {
          _this.footerBg.style.backgroundImage = _this.bigImage;
        }
      };

      checkSizeOfWindow();
      window.addEventListener('resize', function () {
        windowWidth = window.innerWidth;
        checkSizeOfWindow();
      });
    }
  }]);

  return ChangeFooterImage;
}();