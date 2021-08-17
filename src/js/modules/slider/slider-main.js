import Slider from './slider';

export default class MainSlider extends Slider { /* Главный слайдер будет наследоваться от слайдера */
    constructor(btns, prev, next) { /* передаем свойства, которые понадобятся из прототипа */
        super(btns, prev, next);
    }

    showSlides(n) { /* аргумент n отвечает за то, какой сейчас слайд*/
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

        try {
            if (n === 3) { /* если третий слайд */
                this.teacher.style.opacity = '0'; /* скрываем */
                setTimeout(() => { /* через три секунды показываем   */
                    this.teacher.style.opacity = '1';
                    this.teacher.classList.add('animated', 'slideInUp');
                }, 3000);
            } else {
                this.teacher.classList.remove('slideInUp');
            }
        } catch(e){}
    }

    plusSlides(n) { /* отвечает за переключение слайдера */
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => { /* перебираем все кнопки и на каждую кнопку вешаем клик */
            btn.addEventListener('click', () => {
                this.plusSlides(1); /* переключаем слайдер на единицу вперед */
                this.slides[this.slideIndex - 1].classList.add('slideInUp'); /* добавляем анимацию */
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => { /* выходим на родителя кнопки и от родителя идем к предидущему элементу (это будет логотип) и назначаем ему клик */
                if (this.slideIndex !== 1) { /* если не первый слайд */
                    e.preventDefault(); /* отменяем стандартное поведение браузера */
                    this.slideIndex = 1; /* текущему слайду назначаем единицу */
                    this.showSlides(this.slideIndex); /* вызываем функцию с первым слайдом */
                    this.slides[this.slideIndex - 1].classList.remove('slideInLeft');
                    this.slides[this.slideIndex - 1].classList.remove('slideInRight');
                    this.slides[this.slideIndex - 1].classList.add('slideInDown');
                }
            });
        });

        [...this.prev].forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
                this.slides[this.slideIndex - 1].classList.remove('slideInUp');
                this.slides[this.slideIndex - 1].classList.remove('slideInRight');
                this.slides[this.slideIndex - 1].classList.add('slideInLeft');
            });
        });

        [...this.next].forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
                this.slides[this.slideIndex - 1].classList.remove('slideInUp');
                this.slides[this.slideIndex - 1].classList.remove('slideInLeft');
                this.slides[this.slideIndex - 1].classList.add('slideInRight');
            });
        });
    }

    /* Создаем метод рендер (что-то рендериться на странице) */
    render() {
        if (this.container) {
            try {
                this.teacher = document.querySelector('.hanson'); /*  получаем из третьего слайда блок с классом .hanson */
            } catch(e){}
    
            this.showSlides(this.slideIndex); /* вызываем первичную инициализацию, показываем текущий (первый) слайд */

            this.bindTriggers();
        }
    } 

}