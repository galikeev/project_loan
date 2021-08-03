import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/forms";


window.addEventListener('DOMContentLoaded', () => {

    const slider = new MainSlider({ /* Создаем новый объект (экземпляр класса) на основе класса */
        btns: '.next', 
        container: '.page'
    }); 
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', 
        next: '.showup__next', 
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        next: '.modules__info-btns .slick-next', 
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider', 
        next: '.feed__slider .slick-next', 
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const differenceOld = new Difference('.officerold', '.officerold .officer__card-item');
    differenceOld.init();

    const differenceNew = new Difference('.officernew', '.officernew .officer__card-item');
    differenceNew.init();

    const form = new Form('.form');
    form.init();
});