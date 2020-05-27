class textUp {
    constructor(title) {
        this.title = document.querySelectorAll(title);
        this._onIntersectiong();
    }
    _onIntersectiong() {
        const observer = new IntersectionObserver(this._addClass, option);
        this.title.forEach(el => observer.observe(el));
    }
    _addClass(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }
}

class slideAnimation extends textUp {
    _addClass(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
                observer.unobserve(entry.target);
            }
        });
    }
}

class textSide extends textUp {
    _addClass(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('side');
                observer.unobserve(entry.target);
            }
        });
    }
}

const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};


new textUp('.title');
new textUp('.text');
new slideAnimation('.main__img');
new textSide('.project__text');
new textSide('.project__img');


// let child = document.querySelector('.title');


// const callback = function(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//             observer.unobserve(entry.target);
//         }
//     });
// }

// const option = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0
// };
// let observer = new IntersectionObserver(callback, option);
// observer.observe(child);