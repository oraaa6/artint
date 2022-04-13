class ShowImage {
  constructor() {
    this.images = document.querySelectorAll('.gallery__image');
    this.popup = document.querySelector('.popup');
    this.popupClose = document.querySelector('.popup__close');
    this.popupImage = document.querySelector('.popup__image');
    this.arrowLeft = document.querySelector('.popup__arrow--left');
    this.arrowRight = document.querySelector('.popup__arrow--right');
    this.currentImg;
    this.slideLeft;
    this.slideRight;
    this.closingPopup;
  }

  showingImageByClick() {
    this.images.forEach((image, index) => {
      image.addEventListener('click', e => {
        this.popup.classList.remove('popup--hidden');
        this.popupImage.src = e.target.src;
        this.currentImg = index;
      });
    });
    this.closingImageByClickigCross();
    this.changingImageByArrows();
  }

  closingImageByClickigCross() {
    this.closingPopup = () => {
      this.popup.classList.add('popup--fadeOut');
      setTimeout(() => {
        this.popup.classList.add('popup--hidden');
        this.popup.classList.remove('popup--fadeOut');
      }, 300);
    };

    this.popupClose.addEventListener('click', () => {
      this.closingPopup();
    });
    this.closingPopupByClickingDocument();
  }

  changingImageByArrows() {
    this.changingImageByKeys();

    this.slideRight = () => {
      this.currentImg++;

      if (this.currentImg === this.images.length) {
        this.currentImg = 0;
      }

      this.popupImage.src = this.images[this.currentImg].src;
    };

    this.slideLeft = () => {
      this.currentImg--;

      if (this.currentImg === -1) {
        this.currentImg = this.images.length - 1;
      }

      this.popupImage.src = this.images[this.currentImg].src;
    };

    this.arrowRight.addEventListener('click', () => {
      this.slideRight();
    });
    this.arrowLeft.addEventListener('click', () => {
      this.slideLeft();
    });
  }

  changingImageByKeys() {
    if (this.popup.classList.contains("popup--hidden")) {
      window.addEventListener('keydown', e => {
        if (e.code === 'ArrowRight' && e.keyCode === 39) {
          this.slideRight();
        }

        if (e.code === 'ArrowLeft' && e.keyCode === 37) {
          this.slideLeft();
        }

        if (e.code === "Escape" && e.keyCode === 27) {
          this.closingPopup();
        }
      });
    }
  }

  closingPopupByClickingDocument() {
    this.popup.addEventListener('click', e => {
      if (e.target === this.popup) {
        this.closingPopup();
      }
    });
  }

}