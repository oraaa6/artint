

class hamburgerNavigation{
    constructor(hamburger) {
        this.hamburger = hamburger;
        this.menuList = document.querySelector('.menu__list');
    }
    toggleHamburger() {
        for(let i = 0; i < this.hamburger.length; i++) {
                this.hamburger[i].classList.toggle('menu__hamburger--off');
        }  
    }
    openingAndClosingMenuByClickingHamburger(){
        this.menuList.addEventListener('click',() => this.closingListByClickingOnDocument());
            this.toggleHamburger();
            this.menuList.classList.toggle('menu__list--on');
            if (this.menuList.classList.contains('menu__list--on')) {
                    this.menuList.style.backgroundColor = "rgba(165, 174, 183, 0.85)";
            }  
    }
    closingListByClickingOnDocument() {
        if (this.hamburger[0].classList.contains("menu__hamburger--off")) {
            this.menuList.classList.toggle("menu__list--on");
            this.toggleHamburger();
        }
    }
}