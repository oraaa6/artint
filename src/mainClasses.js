class ShowTeam {
    constructor () {
        this.persons = document.querySelectorAll('.person__image');
    }
    showingPerson() {
    window.addEventListener('scroll', () => {
        const scrollWindow = window.scrollY;
        this.persons.forEach((person) => {
            if (scrollWindow/0.85 >= person.offsetTop) {
                person.classList.add('person__image--show');
                }
            })
        })
    }
}

class AddingDots {
    constructor () {
        this.dot = ".";
        this.cursorSpan = document.querySelector('.section-about__header--cursor');
        this.time = 800;
    }
    addDots() {
        setInterval(() => {
            let headerOfAboutSection = document.querySelector('.section-about__header--dots');
            if (headerOfAboutSection.textContent.length >= 4) {
                setTimeout(() => {
                    headerOfAboutSection.textContent = '';  
                }, this.time/2);
            }
            setTimeout(() => {
                headerOfAboutSection.textContent += this.dot;
            }, this.time/2);
        }, this.time);
        this.blinkCursor();
    }
    blinkCursor() {
        setInterval(() => {
            this.cursorSpan.style.opacity = '0';
            setTimeout(() => {
                this.cursorSpan.style.opacity = '1';
            }, this.time/2);
        }, this.time);
    }
}