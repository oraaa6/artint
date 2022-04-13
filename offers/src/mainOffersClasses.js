class ShowSection {
    constructor () {
        this.sectionsOfMain = document.querySelectorAll('.main__scroll-to-section--off');
    }
    showingSection() {
    window.addEventListener('scroll', () => {
        const scrollWindow = window.scrollY;
        this.sectionsOfMain.forEach((section) => {
            if (scrollWindow/0.8 >= section.offsetTop) {
                section.classList.add('main__scroll-to-section--on');
                }
            })
        })
    }
}