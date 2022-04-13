class BrandSlider {
    constructor() {
        this.root = document.documentElement;
        this.brandDisplayedElements = getComputedStyle(this.root).getPropertyValue('--brandDisplayedElements');
        this.brand = document.querySelector('.brand');
    }
    slideBrands() {
        this.root.style.setProperty("--brandElements",this.brand.children.length);
        for (let i = 0; i< this.brandDisplayedElements; i++) {
            this.brand.appendChild(this.brand.children[i].cloneNode(true));  
        }
    }
}
class Counter {
    constructor() {
        this.years = 0;
        this.projects = 0;
        this.percent = 0;
        this.numberAdded = 1;
        this.aside = document.querySelector('.aside');
        this.counterNumbers = document.querySelectorAll('.counter__number');
        this.flag = true;
        
    }
    scrollToSection(){
        window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const positionOfAsideSection = this.aside.offsetTop;
        const distanceToAsideSection = positionOfAsideSection - windowHeight;
        const scrollWindow = window.scrollY;
        if (scrollWindow >= distanceToAsideSection/1.05 && this.flag === true) {
            this.startCounting();
            this.flag = false;
            }
        })
    }
    startCounting() {
        const counter = () => {
            this.years === 8 ? this.years = 8 : this.years += this.numberAdded;
            this.projects === 121 ? clearInterval(counter) : this.projects += this.numberAdded;
            this.percent === 100 ? this.percent = 100 : this.percent += this.numberAdded;
            this.counterNumbers[0].innerHTML = `${this.years}`;
            this.counterNumbers[1].innerHTML = `${this.projects}`;
            this.counterNumbers[2].innerHTML = `${this.percent}`;
        }
        setInterval(() => {
            counter();
        }, 20);
    }
}

