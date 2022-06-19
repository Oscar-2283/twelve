
var swiper = new Swiper(".swiper-container", {
    effect:'',
    loop:false,
    speed:800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable:'true'
    }

    });


let btnNext = document.querySelector('.swiper-arrows .swiper-button-next'),
    btnPrev = document.querySelector('.swiper-arrows .swiper-button-prev'),
    slideText = document.querySelectorAll('.silde-text'),
    sliderNumber = document.querySelectorAll('.swiper-slide .number');

btnNext.addEventListener('click', transitionSlideNext);
btnPrev.addEventListener('click', transitionSlidePrev);

function transitionSlideNext(){
    let slideActText = document.querySelector('.swiper-slide-active .slide-text')
    let slidePrevText = document.querySelector('.swiper-slide-prev .slide-text')

    slidePrevText.classList.remove('playText')
    slideActText.classList.add('playText')
}

function transitionSlidePrev(){
    let slideActText = document.querySelector('.swiper-slide-active .slide-text')
    let slidePrevText = document.querySelector('.swiper-slide-next .slide-text')

    slidePrevText.classList.remove('playText')
    slideActText.classList.add('playText')

}