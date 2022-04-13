"use strict";

// HAMBURGER BUTTON
var hamburgerButton = document.querySelectorAll('.menu__hamburger');
var changeHamburger = new hamburgerNavigation(hamburgerButton);
hamburgerButton.forEach(function (element) {
  return element.addEventListener('click', function () {
    changeHamburger.openingAndClosingMenuByClickingHamburger();
  });
}); // CHANGE LANGUAGE

var switchSectionsLanguage = new changeLanguage();
switchSectionsLanguage.changeLang(); // SLIDER

var changingSliderImages = new Slider();
changingSliderImages.changingImageByTime();
changingSliderImages.changeSliderImageSize(); // BRAND SLIDER 

var changingBrands = new BrandSlider();
changingBrands.slideBrands(); // COUNTER

var countNumbers = new Counter();
countNumbers.scrollToSection(); // SHOW TEAM PHOTOS 

var showTeam = new ShowTeam();
showTeam.showingPerson(); // ADDING DOTS AND BLINKING CURSOR FEATURE

var addDot = new AddingDots();
addDot.addDots(); // CHANGING SIZE OF FOOTER IMAGE

var changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize();