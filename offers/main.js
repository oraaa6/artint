"use strict";

// HAMBURGER BUTTON
var hamburgerButton = document.querySelectorAll('.menu__hamburger');
var changeHamburger = new hamburgerNavigation(hamburgerButton);
hamburgerButton.forEach(function (element) {
  return element.addEventListener('click', function () {
    changeHamburger.openingAndClosingMenuByClickingHamburger();
  });
}); // CHANGING SIZE OF HEADER IMAGE

var changingOfferImages = new ChangingSizeOfImage();
changingOfferImages.changeHeaderImageSize(); // CHANGE LANGUAGE

var switchLanguage = new changeLanguage();
switchLanguage.changeLang(); // SHOW SECTION 

var showOfferSections = new ShowSection();
showOfferSections.showingSection(); // CHANGING SIZE OF FOOTER IMAGE

var changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize();