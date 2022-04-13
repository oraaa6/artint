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
changingOfferImages.changeHeaderImageSize(); // CONTACT FORM

var contactForm = new SendEmail();
contactForm.sendingEmail(); // CHANGE LANGUAGE

var switchLanguage = new changeLanguage();
switchLanguage.changeLang(); // ADDING COMMENT FORM 

var addComment = new AddComment();
addComment.addingComment(); // CHANGING SIZE OF FOOTER IMAGE

var changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize(); // DOWNLOAD RANDOM USER 

var user = new RandomUser();
user.downloadUser();
user.downloadNameAndPicture();