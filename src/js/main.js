import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {

    const slider = new Slider('.page', '.next'); /* Создаем новый объект (экземпляр класса) на основе класса */
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

});