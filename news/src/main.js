// HAMBURGER BUTTON
const hamburgerButton = document.querySelectorAll('.menu__hamburger');
const changeHamburger = new hamburgerNavigation(hamburgerButton);
hamburgerButton.forEach((element)=> element.addEventListener('click', () => {changeHamburger.openingAndClosingMenuByClickingHamburger();} ))

// CHANGING SIZE OF HEADER IMAGE
const changingOfferImages = new ChangingSizeOfImage();
changingOfferImages.changeHeaderImageSize();

// CHANGE LANGUAGE
const switchLanguage = new changeLanguage();
switchLanguage.changeLang();

// SEARCHING NEWS
const searchingNews = new SearchEngine();
searchingNews.searchByText();

// CHANGING SIZE OF FOOTER IMAGE
const changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize();