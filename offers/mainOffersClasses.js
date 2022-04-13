"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ShowSection = /*#__PURE__*/function () {
  function ShowSection() {
    _classCallCheck(this, ShowSection);

    this.sectionsOfMain = document.querySelectorAll('.main__scroll-to-section--off');
  }

  _createClass(ShowSection, [{
    key: "showingSection",
    value: function showingSection() {
      var _this = this;

      window.addEventListener('scroll', function () {
        var scrollWindow = window.scrollY;

        _this.sectionsOfMain.forEach(function (section) {
          if (scrollWindow / 0.8 >= section.offsetTop) {
            section.classList.add('main__scroll-to-section--on');
          }
        });
      });
    }
  }]);

  return ShowSection;
}();