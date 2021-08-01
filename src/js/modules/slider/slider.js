export default class Slider { /* Создали один большой прототип слайдера */
    /* Описываем класс кодом, который будет у нас на странице */
    constructor({page = '', btns = '', next = '', prev = ''} = {}) { /* В конструктор помещаем свойства в качестве объекта со значением по умолчанию (какая страница, какая кнопка) */
        /* Создаем свойства нового объекта */
        this.page = document.querySelector(page); /* получаем текущую страницу */
        this.slides = this.page.children; /* получаем детей (каждый отдельный блок) текущей страницы */
        this.btns = document.querySelectorAll(btns); /* получаем все текущие кнопки */
        this.slideIndex = 1; /* текущий слайд равен 1 */
    }
}