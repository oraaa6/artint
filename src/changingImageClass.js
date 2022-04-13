
class ChangingSizeOfImage {
    constructor() {
        this.headerImage = document.querySelector('.slider__image');
        this.breakpointForMediumImage = 640;
        this.breakpointForLargeImage = 1000;
        this.smallImage;
        this.mediumImage;
        this.largeImage;
        this.path = window.location.pathname.split('/');
    }
    changeHeaderImageSize() {
        let windowWidth = window.innerWidth;
        if (this.path[this.path.length - 1] === 'offers.html') {
            this.smallImage = "../images/offersImage3.jpg";
            this.mediumImage = "../images/offersImage2.jpg";
            this.largeImage = "../images/offersImage1.jpg";
        }
        else if (this.path[this.path.length - 1] === 'realizations.html') {
            this.smallImage = "../images/realizationsImage3.jpg";
            this.mediumImage = "../images/realizationsImage2.jpg";
            this.largeImage = "../images/realizationsImage1.jpg";
        }
        else if (this.path[this.path.length - 1] === 'news.html') {
            this.smallImage = "../images/news3.jpg";
            this.mediumImage = "../images/news2.jpg";
            this.largeImage = "../images/news1.jpg";
        }
        else if (this.path[this.path.length - 1] === 'contact.html') {
            this.smallImage = "../images/contactImage3.jpg";
            this.mediumImage = "../images/contactImage2.jpg";
            this.largeImage = "../images/contactImage1.jpg";
        }
        const checkSizeOfWindow = () => { 
            if (windowWidth < this.breakpointForMediumImage ) {
                this.headerImage.src = this.smallImage;
                }
            else if (windowWidth >= this.breakpointForMediumImage && windowWidth < this.breakpointForLargeImage ) {
                this.headerImage.src = this.mediumImage;
            }
            else if (windowWidth >= this.breakpointForLargeImage) {
                this.headerImage.src = this.largeImage;
            }
            }
            checkSizeOfWindow();
            window.addEventListener('resize', () => {
                windowWidth = window.innerWidth;
                checkSizeOfWindow();
            })
        }
}

