class SendEmail {
    constructor() {
        this.formWriteToUs = document.querySelector('.form-write-to-us');
        this.inputs = this.formWriteToUs.querySelectorAll('.form-write-to-us__input');
        this.formError =  this.formWriteToUs.querySelector('.form__error-write-to-us');
        this.inputsArray = {};
    }
    addingError(inputName) {
        this.formError.textContent = "Nieprawidłowa wartość";
        for (let i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i].name === inputName ) {
                this.inputs[i].style.backgroundColor = "rgba(255, 0, 0, 0.24)";
            }
            else { 
                this.inputs[i].addEventListener('input', () => {
                this.formError.textContent = "";
                this.inputs[i].style.backgroundColor = "rgb(255, 255, 255)";
                })
            }
        }
    }
    sendingEmail() {
        this.formWriteToUs.addEventListener('submit', (e)=> {
            e.preventDefault();
            this.inputs.forEach((input) => {
                this.inputsArray[input.name] = input.value.trim();
            })
            this.checkingEmail();
            this.checkingTelephoneNumber();
            this.checkingName();
            this.checkingTextArea();
            if(this.checkingEmail() && this.checkingTelephoneNumber() && this.checkingName() && this.checkingTextArea()) {
                this.formWriteToUs.submit();
            }
        }) 
    }
    checkingEmail() {
        const regEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$", "i");
        if (!regEmail.test(this.inputsArray.email)) {
            this.addingError('email');
            return false;
        }
        else {
            return true;
        }
    }
    checkingTelephoneNumber() {
        const regTel = new RegExp("[0-9]{3}?[-. ][0-9]{3}?[-. ][0-9]{3}$");
        if (!regTel.test(this.inputsArray.tel)) {
            this.addingError('tel');
            return false;
        }
        else {
            return true;
        }
    }
    checkingName() {
        if(this.inputsArray.name === '') {
            this.addingError('name');
            return false;
        }
        else {
            return true;
        }
    }
    checkingTextArea() {
        if(this.inputsArray.message === '') {
            this.addingError('message');
            return false; 
        }
        else {
            return true;
        }
    }
}


class RandomUser {
    constructor() {
        this.userName = document.querySelectorAll('.comment__name');
        this.userDate = document.querySelectorAll('.comment__time');
        this.userPicture = document.querySelectorAll('.comment__image');
        this.url ='https://randomuser.me/api/?results=3&name=first, last&picture=thumbnail';
    }
    downloadUser() {
        fetch(this.url)
        .then((response) => {
            if(response.status !==200) {
             return Promise.reject(`http error: ${response.status}`);
            }
             else {
                 return response.json();
                }
        })
        .then((json) => {
            this.downloadNameAndPicture(json.results);
        })
        .catch(error => console.log(error));
    }
    downloadNameAndPicture(users) {
        users.forEach((user, index) => {
            this.userName[index].textContent = `${user.name.first} ${user.name.last}`;
            this.userPicture[index].src = user.picture.thumbnail;
        });
        this.randomDates(new Date(2000, 0, 1), new Date());
    }
    randomDates(start, end) {
        this.userDate.forEach((date) => {
            const randomDate = (new Date(start.getTime() + Math.random()*(end.getTime() - start.getTime()))).toLocaleString('en-US');
            date.textContent = randomDate;
        })
    }
}

class AddComment {
    constructor() {
        this.formAddComment = document.querySelector('.form-add-comment');
        this.formError = document.querySelector('.form__error-add-comment');
        this.formInputs = document.querySelectorAll('.form-add-comment__input');
        this.inputsArray = {};
        this.commentsContainer = document.querySelector('.comments__container');
        this.stars = [...document.querySelectorAll('.rate-star')];
        this.starsContainer = document.querySelector('.form__star-container');
        this.agreement = document.querySelector('.form-add-comment__agreement-input');
        this.flag = true;
        this.yellowStars;
        this.blackStars;
        this.clickedStars;
    }
    addingComment() {
        this.selectingStar();
        this.formAddComment.addEventListener('submit', (e) => {
            e.preventDefault();
            this.formInputs.forEach((input) => {
                this.inputsArray[input.name] = input.value.trim();
                if (!input.value) {
                    this.formError.textContent = "Nieprawidłowa wartość";
                    input.style.backgroundColor = "rgba(255, 0, 0, 0.24)";
                    if (input.value || !input.value){
                        input.addEventListener('input', () => {
                        this.formError.textContent = "";
                        input.style.backgroundColor = "rgb(255, 255, 255)";
                        })
                    }
                }
                if(this.clickedStars === undefined || this.clickedStars === '') {
                    this.formError.textContent = "Nieprawidłowa wartość";
                    this.starsContainer.style.backgroundColor = "rgba(255, 0, 0, 0.24)";
                    this.starsContainer.addEventListener('mousemove', () => {
                        this.starsContainer.style.backgroundColor = "transparent" ;  
                    })
                }
            
            })
            if(this.inputsArray.name && this.inputsArray.comment && this.clickedStars) {
                const article = document.createElement('article');
                this.commentsContainer.appendChild(article);
                article.className ="comment";
                article.innerHTML = `<div class="comment__image-and-name-container">
                <div class="comment__image-container">
                    <img src="../images/user.jpg" alt="" class="comment__image">
                </div>
                    <div class="comment__name-container">
                        <p class="comment__name">${this.inputsArray.name}</p>
                        <p class="comment__time">${(new Date().toLocaleString('en-US'))}</p>
                        <i class="comment__star-added fi fi-rs-star"></i>
                        <i class="comment__star-added fi fi-rs-star"></i>
                        <i class="comment__star-added fi fi-rs-star"></i>
                        <i class="comment__star-added fi fi-rs-star"></i>
                        <i class="comment__star-added fi fi-rs-star"></i> 
                    </div>
                </div>
           <div class="comment__text-container">
                <p class="comment__text--added">${this.inputsArray.comment}</p>
           </div>`;
           this.addingStar();
           this.formInputs.forEach((input) => {
               input.value = '';
           })
           this.stars.forEach((star) => {
               star.classList.remove('comment__star--yellow');
           })
           this.formError.textContent = "";
           this.agreement.checked = false;
           this.clickedStars = '';
        }
    })
}
    selectingStar() {
        this.stars.forEach((star, index) => {
            const changingStarColor = () => {
                this.yellowStars = this.stars.slice(0, index+1);
                this.blackStars = this.stars.slice (index+1);
                for (let i = 0; i < this.yellowStars.length; i++) {
                    for (let j = 0; j < this.blackStars.length; j++) {
                        this.blackStars[j].classList.remove('comment__star--yellow');
                        }
                    this.yellowStars[i].classList.add('comment__star--yellow');
                }
                return this.yellowStars;
            }
            const removingColorStarsAfterLeaveTheElement = () => {
                this.starsContainer.addEventListener('mouseleave', (e) => {
                    if(this.flag === false) {
                        return;
                    }
                    else {
                        for (let i = 0; i < this.stars.length; i++) {
                            this.stars[i].classList.remove('comment__star--yellow')
                        } 
                    }
                })
            }
            star.addEventListener('click', () => {
                changingStarColor();
                this.clickedStars = changingStarColor();
                this.flag = false;
                if(this.formError.textContent = true) {
                    this.formError.textContent = "";
                }
                this.formAddComment.addEventListener('submit', () => {
                   this.flag = true;
                })
            })
            star.addEventListener('mousemove', () => {
                if(this.flag === false) {
                   return
                }
                else if (this.flag === true) {
                    changingStarColor();
                    removingColorStarsAfterLeaveTheElement();
                }
            })
        })      
    }
    addingStar() {  
        const iLength = this.clickedStars.length;
        let commentArticle = document.querySelectorAll('.comment');
        let commentLastArticle = commentArticle[commentArticle.length -1];
        let addedStars = [...commentLastArticle.querySelectorAll('.comment__star-added')];
        for (let i = 0; i < iLength; i++) {
            addedStars[i].classList.add('comment__star--yellow');
        }
        addedStars.length = 0;
    }
}