


class Slider {
    constructor() {
        this.sliderImage = document.querySelector('.slider__image');
        this.arrows = document.querySelectorAll('.slider__arrow');
        this.slideList = [];
        this.dots = [...document.querySelectorAll('.slider__dot')];
        this.index = 0;
        this.interval = '';
        this.time = 3000;
        this.breakpointForMediumImage = 640;
        this.breakpointForLargeImage = 1000;
    }
    changeSliderImageSize() {
        let windowWidth = window.innerWidth;
        const checkSizeOfWindow = () => { 
            if (windowWidth < this.breakpointForMediumImage ) {
                this.slideList = ["images/image 1.3.jpg", "images/image 2.3.jpg", "images/image 3.3.jpg", "images/image 4.3.jpg"];
                }
            else if (windowWidth >= this.breakpointForMediumImage && windowWidth < this.breakpointForLargeImage ) {
                this.slideList = ["images/image 1.2.jpg", "images/image 2.2.jpg", "images/image 3.2.jpg", "images/image 4.2.jpg"];
            }
            else if (windowWidth >= this.breakpointForLargeImage) {
                this.slideList = ["images/image 1.1.jpg", "images/image 2.1.jpg", "images/image 3.1.jpg", "images/image 4.1.jpg"];
            }
            }
            checkSizeOfWindow();
            window.addEventListener('resize', () => {
                windowWidth = window.innerWidth;
                checkSizeOfWindow();
            })
        }
    changingImageByTime() {
        this.changeSlide = () => {
            this.index++;
            if (this.index === this.slideList.length) {
                this.index = 0;
            }
            this.changeDot();
            this.sliderImage.src = this.slideList[this.index];
        }
            
        this.interval = setInterval(() => {
            this.changeSlide();
        }, this.time);
        this.changingImageByArrows();
    }
    changingImageByArrows() {
        this.arrows.forEach((arrow, arrowIndex) => arrow.addEventListener('click', () => {
            clearInterval(this.interval);
            arrowIndex === 0 ? this.index++ : this.index--;
            if (this.index === this.slideList.length) {
                this.index = 0;
            }
            else if (this.index < 0) {
                this.index = this.slideList.length -1;
            }
            this.sliderImage.src = this.slideList[this.index];
            this.changeDot();
            this.interval = setInterval(() => { 
                this.changeSlide();
            }, (this.time));
                }
            )
        )
    }
    changeDot() {
       const activeDot = this.dots.findIndex((dot) => dot.classList.contains("slider__dot--active"));
       this.dots[activeDot].classList.remove('slider__dot--active');
       this.dots[this.index].classList.add('slider__dot--active');
    }
}

