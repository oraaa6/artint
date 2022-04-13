
// HAMBURGER BUTTON
const hamburgerButton = document.querySelectorAll('.menu__hamburger');
const changeHamburger = new hamburgerNavigation(hamburgerButton);
hamburgerButton.forEach((element)=> element.addEventListener('click', () => {changeHamburger.openingAndClosingMenuByClickingHamburger();} ))

// CHANGE LANGUAGE
const switchSectionsLanguage = new changeLanguage();
switchSectionsLanguage.changeLang();

// SLIDER
const changingSliderImages = new Slider();
changingSliderImages.changingImageByTime();
changingSliderImages.changeSliderImageSize();

// BRAND SLIDER 
const changingBrands = new BrandSlider();
changingBrands.slideBrands();

// COUNTER
const countNumbers = new Counter();
countNumbers.scrollToSection();

// SHOW TEAM PHOTOS 
const showTeam = new ShowTeam();
showTeam.showingPerson();

// ADDING DOTS AND BLINKING CURSOR FEATURE
const addDot = new AddingDots();
addDot.addDots();

// CHANGING SIZE OF FOOTER IMAGE
const changingFooterImages = new ChangeFooterImage();
changingFooterImages.changeFooterImageSize();