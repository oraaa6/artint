class ChangeFooterImage {
    constructor() {
        this.breakpointForLargeImage = 1240;
        this.footerBg = document.querySelector('.footer');
        this.smallImage = 'url(images/footer1.jpg)';
        this.bigImage= 'url(images/footer2.jpg)';
        this.path = window.location.pathname.split('/');
    }

    changeFooterImageSize() {
        let windowWidth = window.innerWidth;
        const checkSizeOfWindow = () => { 
        if (this.path[this.path.length -1] !== 'index.html') {
            this.footerBg.style.backgroundImage = 'url(../images/footer1.jpg)';
            this.bigImage = 'url(../images/footer2.jpg)';
            this.smallImage = 'url(../images/footer1.jpg)'; 
        }
        if (windowWidth <= this.breakpointForLargeImage) {
                this.footerBg.style.backgroundImage = this.smallImage;
            }
        else  {
            this.footerBg.style.backgroundImage = this.bigImage;
            }
        }
        checkSizeOfWindow();
            window.addEventListener('resize', () => {
                windowWidth = window.innerWidth;
                checkSizeOfWindow();
        })
    }   
}