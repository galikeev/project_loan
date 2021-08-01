export default class Slider { /* Называем класс слайдер */
    /* Описываем класс кодом, который будет у нас на странице */
    constructor(page, btns) { /* В конструктор помещаем свойства (какая страница, какая кнопка) */
        /* Создаем свойства нового объекта */
        this.page = document.querySelector(page); /* получаем текущую страницу */
        this.slides = this.page.children; /* получаем детей (каждый отдельный блок) текущей страницы */
        this.btns = document.querySelectorAll(btns); /* получаем все текущие кнопки */
        this.slideIndex = 1; /* текущий слайд равен 1 */
    }

    showSlides(n) { /* аргумент n отвечает за то, куда двигается наш слайдер */
        if (n > this.slides.length) { /* если n будет больше, чем общее количество слайдов */
            this.slideIndex = 1; /* то мы переходим к первому слайду */
        }

        if (n < 1) { /* если n будет меньше, чем 1 слайд */
            this.slideIndex = this.slides.length; /* то мы переходим к последнему слайду */
        }

        [...this.slides].forEach(slide => { /* перебираем массив всех слайдов и скрываем каждый слайд */
            slide.style.display = 'none';
            slide.classList.add('animated');
        });

        this.slides[this.slideIndex - 1].style.display = 'block'; /* показываем первый слайд */
    }

    plusSlides(n) { /* отвечает за переключение слайдера */
        this.showSlides(this.slideIndex += n);
    }
    /* Создаем метод рендер (что-то рендериться на странице) */
    render() {
        this.btns.forEach(btn => { /* перебираем все кнопки и на каждую кнопку вешаем клик */
            btn.addEventListener('click', () => {
                this.plusSlides(1); /* переключаем слайдер на единицу вперед */
                this.slides[this.slideIndex - 1].classList.remove('slideOutUp');
                this.slides[this.slideIndex - 1].classList.add('slideInUp'); /* добавляем анимацию */
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => { /* выходим на родителя кнопки и от родителя идем к предидущему элементу (это будет логотип) и назначаем ему клик */
                e.preventDefault(); /* отменяем стандартное поведение браузера */
                this.slideIndex = 1; /* текущему слайду назначаем единицу */
                this.showSlides(this.slideIndex); /* вызываем функцию с первым слайдом */
                this.slides[this.slideIndex - 1].classList.add('slideInDown');
            });
        });

        this.showSlides(this.slideIndex); /* вызываем первичную инициализацию, показываем текущий (первый) слайд */
    }

}