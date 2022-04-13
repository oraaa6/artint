// HAMBURGER BUTTON
const hamburgerButton = document.querySelectorAll('.menu__hamburger');
const changeHamburger = new hamburgerNavigation(hamburgerButton);
hamburgerButton.forEach((element)=> element.addEventListener('click', () => {changeHamburger.openingAndClosingMenuByClickingHamburger();} ))

// CHANGING SIZE OF HEADER IMAGE
const changingOfferImages = new ChangingSizeOfImage();
changingOfferImages.changeHeaderImageSize();

// CONTACT FORM
const contactForm = new SendEmail();
contactForm.sendingEmail();

// CHANGE LANGUAGE
const switchLanguage = new changeLanguage();
switchLanguage.changeLang();

// ADDING COMMENT FORM 
const addComment = new AddComment();
addComment.addingComment();

// CHANGING SIZE OF FOOTER IMAGE
const changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize();

// DOWNLOAD RANDOM USER 
const user = new RandomUser();
user.downloadUser();
user.downloadNameAndPicture()

