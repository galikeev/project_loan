import Slider from "./slider";

export default class MiniSlider extends Slider { /* Мини слайдер будет наследоваться от слайдера */
    constructor (container, next, prev, activeClass, animate, autoplay) { /* передаем свойства, которые понадобятся из прототипа */
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() { /* метод отвечает за декорацию слайдов */
        [...this.slides].forEach(slide => { /* перебираем массив всех слайдов и удаляем класс активности */
            slide.classList.remove(this.activeClass);
            if (this.animate) { /* если есть анимация, то каждому слайду устанавливаем opacity */
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) { /* если первый слайд не является кнопкой, то добавляем класс активности */
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) { /* если есть анимация, то первому слайду устанавливаем opacity */
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if (this.prev.parentNode === this.container) { /* если у кнопки назад родитель является контейнером */
            this.container.insertBefore(this.slides[0], this.prev); /* то в контейнере добавляем первый слайд перед кнопкой назад */
        } else {
            this.container.appendChild(this.slides[0]); /* если нет, то первый слайд вставляем в конец контейнера */
        }
        this.decorizeSlides();
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide()); /* при клике на кнопку вперед запускаем метод nextSlide */

        this.prev.addEventListener('click', () => { /* при клике на кнопку назад запускаем цикл */

            for (let i = this.slides.length - 1; i > 0; i--) { /* запускаем цикл с последнего элемента */
                if (this.slides[i].tagName !== 'BUTTON') { /* если элемент с конца не является кнопкой */
                    this.container.insertBefore(this.slides[i], this.slides[0]); /* последний элемент не кнопку помещаем перед первым элементом */
                    this.decorizeSlides();
                    break;
                }
            }

            
        });
    }

    activateAnimation() {
        this.paused = setInterval(() => this.nextSlide(), 5000);
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autoplay) { /* если есть автоплэй, то вешаем событие на блок и стрелки */
            this.container.addEventListener('mouseenter', () => clearInterval(this.paused));
            this.next.addEventListener('mouseenter', () => clearInterval(this.paused));
            this.prev.addEventListener('mouseenter', () => clearInterval(this.paused));
            this.container.addEventListener('mouseleave', () => this.activateAnimation());
            this.next.addEventListener('mouseleave', () => this.activateAnimation());
            this.prev.addEventListener('mouseleave', () => this.activateAnimation());
            this.activateAnimation();
        }
    }
}