"use strict";

function detectIE() {
  if (document.documentMode) {
    document.querySelector('.body__message').classList.remove('body__message--off');
  }
}

;
detectIE();