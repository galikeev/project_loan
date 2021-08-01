import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {

    const slider = new Slider('.page', '.next'); /* Создаем новый объект (экземпляр класса) на основе класса */
    slider.render();

});