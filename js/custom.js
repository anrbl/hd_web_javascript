//var . let . const
// var : 예전에 자주 사용
// const : 대부분 사용 + 선언과 동시에 할당
// let : 변하는 숫자 선언 

const TOPBANNER = document.querySelector('.TopBanner');
const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');
const TOPBANNER_CLOSE = document.querySelector('.TopBanner .close');

const TOPBANNER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex);
            TOPBANNER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBANNER_DOTS[this.realIndex].classList.add('on');
        }
    }
});


TOPBANNER_DOTS.forEach((it, idx) => {
    //익명 함수
    it.addEventListener('click', (e) => {
        e.preventDefault();
        TOPBANNER_SLIDE.slideToLoop(idx);
    });
});

TOPBANNER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBANNER.classList.add('on');
})