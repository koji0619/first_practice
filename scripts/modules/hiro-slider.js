const mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    effect: "fade",
    speed: 1000,
    centeredSlides: true,
    autoplay: { delay: 5000, disableOnInteraction: false, },
    // slidesPerView: 1,
    // breakpoints: {
    //     1024: {
    //         slidesPerView: 2,
    //     },
    // },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});