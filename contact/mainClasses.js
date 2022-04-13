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

var SendEmail = /*#__PURE__*/function () {
  function SendEmail() {
    _classCallCheck(this, SendEmail);

    this.formWriteToUs = document.querySelector('.form-write-to-us');
    this.inputs = this.formWriteToUs.querySelectorAll('.form-write-to-us__input');
    this.formError = this.formWriteToUs.querySelector('.form__error-write-to-us');
    this.inputsArray = {};
  }

  _createClass(SendEmail, [{
    key: "addingError",
    value: function addingError(inputName) {
      var _this = this;

      this.formError.textContent = "Nieprawidłowa wartość";

      var _loop = function _loop(i) {
        if (_this.inputs[i].name === inputName) {
          _this.inputs[i].style.backgroundColor = "rgba(255, 0, 0, 0.24)";
        } else {
          _this.inputs[i].addEventListener('input', function () {
            _this.formError.textContent = "";
            _this.inputs[i].style.backgroundColor = "rgb(255, 255, 255)";
          });
        }
      };

      for (var i = 0; i < this.inputs.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "sendingEmail",
    value: function sendingEmail() {
      var _this2 = this;

      this.formWriteToUs.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2.inputs.forEach(function (input) {
          _this2.inputsArray[input.name] = input.value.trim();
        });

        _this2.checkingEmail();

        _this2.checkingTelephoneNumber();

        _this2.checkingName();

        _this2.checkingTextArea();

        if (_this2.checkingEmail() && _this2.checkingTelephoneNumber() && _this2.checkingName() && _this2.checkingTextArea()) {
          _this2.formWriteToUs.submit();
        }
      });
    }
  }, {
    key: "checkingEmail",
    value: function checkingEmail() {
      var regEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$", "i");

      if (!regEmail.test(this.inputsArray.email)) {
        this.addingError('email');
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "checkingTelephoneNumber",
    value: function checkingTelephoneNumber() {
      var regTel = new RegExp("[0-9]{3}?[-. ][0-9]{3}?[-. ][0-9]{3}$");

      if (!regTel.test(this.inputsArray.tel)) {
        this.addingError('tel');
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "checkingName",
    value: function checkingName() {
      if (this.inputsArray.name === '') {
        this.addingError('name');
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "checkingTextArea",
    value: function checkingTextArea() {
      if (this.inputsArray.message === '') {
        this.addingError('message');
        return false;
      } else {
        return true;
      }
    }
  }]);

  return SendEmail;
}();

var RandomUser = /*#__PURE__*/function () {
  function RandomUser() {
    _classCallCheck(this, RandomUser);

    this.userName = document.querySelectorAll('.comment__name');
    this.userDate = document.querySelectorAll('.comment__time');
    this.userPicture = document.querySelectorAll('.comment__image');
    this.url = 'https://randomuser.me/api/?results=3&name=first, last&picture=thumbnail';
  }

  _createClass(RandomUser, [{
    key: "downloadUser",
    value: function downloadUser() {
      var _this3 = this;

      fetch(this.url).then(function (response) {
        if (response.status !== 200) {
          return Promise.reject("http error: ".concat(response.status));
        } else {
          return response.json();
        }
      }).then(function (json) {
        _this3.downloadNameAndPicture(json.results);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "downloadNameAndPicture",
    value: function downloadNameAndPicture(users) {
      var _this4 = this;

      users.forEach(function (user, index) {
        _this4.userName[index].textContent = "".concat(user.name.first, " ").concat(user.name.last);
        _this4.userPicture[index].src = user.picture.thumbnail;
      });
      this.randomDates(new Date(2000, 0, 1), new Date());
    }
  }, {
    key: "randomDates",
    value: function randomDates(start, end) {
      this.userDate.forEach(function (date) {
        var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleString('en-US');
        date.textContent = randomDate;
      });
    }
  }]);

  return RandomUser;
}();

var AddComment = /*#__PURE__*/function () {
  function AddComment() {
    _classCallCheck(this, AddComment);

    this.formAddComment = document.querySelector('.form-add-comment');
    this.formError = document.querySelector('.form__error-add-comment');
    this.formInputs = document.querySelectorAll('.form-add-comment__input');
    this.inputsArray = {};
    this.commentsContainer = document.querySelector('.comments__container');
    this.stars = _toConsumableArray(document.querySelectorAll('.rate-star'));
    this.starsContainer = document.querySelector('.form__star-container');
    this.agreement = document.querySelector('.form-add-comment__agreement-input');
    this.flag = true;
    this.yellowStars;
    this.blackStars;
    this.clickedStars;
  }

  _createClass(AddComment, [{
    key: "addingComment",
    value: function addingComment() {
      var _this5 = this;

      this.selectingStar();
      this.formAddComment.addEventListener('submit', function (e) {
        e.preventDefault();

        _this5.formInputs.forEach(function (input) {
          _this5.inputsArray[input.name] = input.value.trim();

          if (!input.value) {
            _this5.formError.textContent = "Nieprawidłowa wartość";
            input.style.backgroundColor = "rgba(255, 0, 0, 0.24)";

            if (input.value || !input.value) {
              input.addEventListener('input', function () {
                _this5.formError.textContent = "";
                input.style.backgroundColor = "rgb(255, 255, 255)";
              });
            }
          }

          if (_this5.clickedStars === undefined || _this5.clickedStars === '') {
            _this5.formError.textContent = "Nieprawidłowa wartość";
            _this5.starsContainer.style.backgroundColor = "rgba(255, 0, 0, 0.24)";

            _this5.starsContainer.addEventListener('mousemove', function () {
              _this5.starsContainer.style.backgroundColor = "transparent";
            });
          }
        });

        if (_this5.inputsArray.name && _this5.inputsArray.comment && _this5.clickedStars) {
          var article = document.createElement('article');

          _this5.commentsContainer.appendChild(article);

          article.className = "comment";
          article.innerHTML = "<div class=\"comment__image-and-name-container\">\n                <div class=\"comment__image-container\">\n                    <img src=\"../images/user.jpg\" alt=\"\" class=\"comment__image\">\n                </div>\n                    <div class=\"comment__name-container\">\n                        <p class=\"comment__name\">".concat(_this5.inputsArray.name, "</p>\n                        <p class=\"comment__time\">").concat(new Date().toLocaleString('en-US'), "</p>\n                        <i class=\"comment__star-added fi fi-rs-star\"></i>\n                        <i class=\"comment__star-added fi fi-rs-star\"></i>\n                        <i class=\"comment__star-added fi fi-rs-star\"></i>\n                        <i class=\"comment__star-added fi fi-rs-star\"></i>\n                        <i class=\"comment__star-added fi fi-rs-star\"></i> \n                    </div>\n                </div>\n           <div class=\"comment__text-container\">\n                <p class=\"comment__text--added\">").concat(_this5.inputsArray.comment, "</p>\n           </div>");

          _this5.addingStar();

          _this5.formInputs.forEach(function (input) {
            input.value = '';
          });

          _this5.stars.forEach(function (star) {
            star.classList.remove('comment__star--yellow');
          });

          _this5.formError.textContent = "";
          _this5.agreement.checked = false;
          _this5.clickedStars = '';
        }
      });
    }
  }, {
    key: "selectingStar",
    value: function selectingStar() {
      var _this6 = this;

      this.stars.forEach(function (star, index) {
        var changingStarColor = function changingStarColor() {
          _this6.yellowStars = _this6.stars.slice(0, index + 1);
          _this6.blackStars = _this6.stars.slice(index + 1);

          for (var i = 0; i < _this6.yellowStars.length; i++) {
            for (var j = 0; j < _this6.blackStars.length; j++) {
              _this6.blackStars[j].classList.remove('comment__star--yellow');
            }

            _this6.yellowStars[i].classList.add('comment__star--yellow');
          }

          return _this6.yellowStars;
        };

        var removingColorStarsAfterLeaveTheElement = function removingColorStarsAfterLeaveTheElement() {
          _this6.starsContainer.addEventListener('mouseleave', function (e) {
            if (_this6.flag === false) {
              return;
            } else {
              for (var i = 0; i < _this6.stars.length; i++) {
                _this6.stars[i].classList.remove('comment__star--yellow');
              }
            }
          });
        };

        star.addEventListener('click', function () {
          changingStarColor();
          _this6.clickedStars = changingStarColor();
          _this6.flag = false;

          if (_this6.formError.textContent = true) {
            _this6.formError.textContent = "";
          }

          _this6.formAddComment.addEventListener('submit', function () {
            _this6.flag = true;
          });
        });
        star.addEventListener('mousemove', function () {
          if (_this6.flag === false) {
            return;
          } else if (_this6.flag === true) {
            changingStarColor();
            removingColorStarsAfterLeaveTheElement();
          }
        });
      });
    }
  }, {
    key: "addingStar",
    value: function addingStar() {
      var iLength = this.clickedStars.length;
      var commentArticle = document.querySelectorAll('.comment');
      var commentLastArticle = commentArticle[commentArticle.length - 1];

      var addedStars = _toConsumableArray(commentLastArticle.querySelectorAll('.comment__star-added'));

      for (var i = 0; i < iLength; i++) {
        addedStars[i].classList.add('comment__star--yellow');
      }

      addedStars.length = 0;
    }
  }]);

  return AddComment;
}();