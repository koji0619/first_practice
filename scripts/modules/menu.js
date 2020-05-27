class menuSlide {
    constructor() {
        this.list = document.querySelector('.menu__list');
        this.slide = document.querySelector('.menu__slide');
        this._click();
    }
    _click() {
        this.slide.addEventListener('click', () => {
            this.slide.classList.toggle('menu__slide-click')
            this.list.classList.toggle('menu__list-click')
        })
    }
}

new menuSlide();