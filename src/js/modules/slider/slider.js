export default class Slider { /* Создали один большой прототип слайдера */
    /* Описываем класс кодом, который будет у нас на странице */
    constructor({container = null, btns = null, next = null, prev = null, activeClass = '', animate, autoplay} = {}) { /* В конструктор помещаем свойства в качестве объекта со значением по умолчанию (какой контейнер, какая кнопка) */
        /* Создаем свойства нового объекта */
        this.container = document.querySelector(container); /* получаем текущую страницу */
        try {this.slides = this.container.children;} catch(e){} /* получаем детей (каждый отдельный блок) текущей страницы */
        this.btns = document.querySelectorAll(btns); /* получаем все текущие кнопки */
        this.next = document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1; /* текущий слайд равен 1 */
    }
}