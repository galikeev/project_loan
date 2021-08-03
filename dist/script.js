/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");





window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    /* Создаем новый объект (экземпляр класса) на основе класса */
    btns: '.next',
    container: '.page'
  });
  slider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay');
  player.init();
  const differenceOld = new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officerold .officer__card-item');
  differenceOld.init();
  const differenceNew = new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.officernew .officer__card-item');
  differenceNew.init();
  const form = new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]('.form');
  form.init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(officer, items) {
    this.officer = document.querySelector(officer);
    this.items = document.querySelectorAll(items);
    this.counter = 0;
  }

  hideItems() {
    this.items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        /* если элемент массива не является последним */
        item.style.display = 'none';
        item.classList.add('animated');
      }
    });
  }

  bindTriggers() {
    this.officer.querySelector('.plus').addEventListener('click', () => {
      this.items[this.counter].style.display = 'flex';
      this.items[this.counter].classList.add('fadeIn');

      if (this.counter !== this.items.length - 2) {
        /* если счетчик не равняется последним двум элементам */
        this.counter++;
      } else {
        this.items[this.items.length - 1].remove();
        /* удаляем последний элемент */
      }
    });
  }

  init() {
    this.hideItems();
    this.bindTriggers();
  }

}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка..',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так..'
    };
    this.path = 'assets/question.php';
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.addEventListener('click', () => {
        elem.selectionStart = elem.selectionEnd = elem.value.length;
        /* если начало и конец совпадают, то будем будет присваивать значение количества элементов */
      });
      elem.focus();
      /* Установили фокус на элементе */

      if (elem.setSelectionRange) {
        /* Если у элемента есть такой метод */
        elem.setSelectionRange(pos, pos);
        /* То устанавливаем у этого метода начальную и конечную позицию (если один и тот же элемент, то курсор будет в определенной позиции) */
      } else if (elem.createTextRange) {
        /* Если у элемента есть такой метод (для IE) */
        let range = elem.createTextRange();
        /* То используем такой метод */

        range.collapse(true);
        /* Устанавливаем граничные точки диапазона в true */

        range.moveEnd('character', pos);
        /* Конечная точка */

        range.moveStart('character', pos);
        /* Начальная точка */

        range.select();
        /* Установили курсор и выделили элемент */
      }
    };

    function createMask(e) {
      let matrix = '+1 (___) ___-____',

      /* Маска */
      i = 0,
          def = matrix.replace(/\D/g, ''),

      /* Все не цифры заменяем на пустую строку */
      val = this.value.replace(/\D/g, '');
      /* У контекста (на основе того, что ввел пользователь) все не цифры заменяем на пустую строку */

      if (def.length >= val.length) {
        /* Если количество цифр в def будет больше или равно в val */
        val = def;
        /* То мы подставляем дефолтное значение def */
      }

      this.value = matrix.replace(/./g, function (a) {
        /* В контекст (куда ввел пользователь) кладем матрицу со всеми элеменатми и для каждого элемента создаем функцию */
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        /* возвращаем каждый символ, проверяем входит ли он в определенный диапазон (цифры) и i будет меньше количеству символов в val (которое уже избавилось от всех не цифр). */

        /* Если условие выполнилось, то будем из функции возвращать следующий символ. А если i будет больше или равно количеству символов в val, то будем возвращать пустую строку. Если нет, то будем возвращать a */
      });

      if (e.type === 'blur') {
        /* Если тип события блюр */
        if (this.value.length == 2) {
          /* Если количество символов будет равно 2 */
          this.value = '';
          /* То записываем пустую строку */
        }
      } else {
        setCursorPosition(this.value.length, this);
        /* Если другое событие, то передаем функцию с аргументами (количество символов, которое есть сейчас и ссылка на элемент, который сейчас в работе) */
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');
    /* Создаем переменную инпутс */

    inputs.forEach(input => {
      /* На каждый инпут вешаем несколько обработчиков событий */
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }

  init() {
    this.checkMailInputs();
    this.initMask();
    this.forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(item);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 6000);
        });
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  bindTriggers() {
    /* метод подвязки триггеров к определенным действиям */
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          /* если плеер уже есть, то есть такой iframe с таким id */
          this.overlay.style.display = 'flex';
          /* то просто показываем overlay */

          this.overlay.classList.add('animated', 'fadeIn');
        } else {
          /* если плеер еще не запускался */
          const path = btn.getAttribute('data-url');
          /* получаем url из кнопки */

          this.createPlayer(path);
          /* создаем плеер */
        }
      });
    });
  }

  bindClose() {
    /* метод подвязки закрытия */
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
    this.overlay.addEventListener('click', e => {
      if (e.target === this.overlay) {
        this.overlay.style.display = 'none';
        this.player.stopVideo();
      }
    });
  }

  createPlayer(url) {
    /* метод создания плеера */
    this.player = new YT.Player('frame', {
      /* frame это id какого-то блока, который будем замещать плеером */
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      origin: location.hostname
    });
    this.overlay.style.display = 'flex';
    this.overlay.classList.add('animated', 'fadeIn');
  }

  init() {
    /* инициализация всего функционала */
    const tag = document.createElement('script');
    /* создаем элемент скрипт */

    tag.src = "https://www.youtube.com/iframe_api";
    /* устанавливаем атрибут src */

    const firstScriptTag = document.getElementsByTagName('script')[0];
    /* находим первый скрипт */

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    /* перед первым нашим скриптом добавляем этот скрипт */

    this.bindTriggers();
    this.bindClose();
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /* Главный слайдер будет наследоваться от слайдера */
  constructor(btns) {
    /* передаем свойства, которые понадобятся из прототипа */
    super(btns);
  }

  showSlides(n) {
    /* аргумент n отвечает за то, какой сейчас слайд*/
    if (n > this.slides.length) {
      /* если n будет больше, чем общее количество слайдов */
      this.slideIndex = 1;
      /* то мы переходим к первому слайду */
    }

    if (n < 1) {
      /* если n будет меньше, чем 1 слайд */
      this.slideIndex = this.slides.length;
      /* то мы переходим к последнему слайду */
    }

    [...this.slides].forEach(slide => {
      /* перебираем массив всех слайдов и скрываем каждый слайд */
      slide.style.display = 'none';
      slide.classList.add('animated');
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
    /* показываем первый слайд */

    this.teacher = this.slides[2].querySelector('.hanson');
    /*  получаем из третьего слайда блок с классом .hanson */

    if (n === 3) {
      /* если третий слайд */
      this.teacher.style.opacity = '0';
      /* скрываем */

      setTimeout(() => {
        /* через три секунды показываем   */
        this.teacher.style.opacity = '1';
        this.teacher.classList.add('animated', 'slideInUp');
      }, 3000);
    } else {
      this.teacher.classList.remove('slideInUp');
    }
  }

  plusSlides(n) {
    /* отвечает за переключение слайдера */
    this.showSlides(this.slideIndex += n);
  }
  /* Создаем метод рендер (что-то рендериться на странице) */


  render() {
    this.btns.forEach(btn => {
      /* перебираем все кнопки и на каждую кнопку вешаем клик */
      btn.addEventListener('click', () => {
        this.plusSlides(1);
        /* переключаем слайдер на единицу вперед */

        this.slides[this.slideIndex - 1].classList.remove('slideOutUp');
        this.slides[this.slideIndex - 1].classList.add('slideInUp');
        /* добавляем анимацию */
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        /* выходим на родителя кнопки и от родителя идем к предидущему элементу (это будет логотип) и назначаем ему клик */
        e.preventDefault();
        /* отменяем стандартное поведение браузера */

        this.slideIndex = 1;
        /* текущему слайду назначаем единицу */

        this.showSlides(this.slideIndex);
        /* вызываем функцию с первым слайдом */

        this.slides[this.slideIndex - 1].classList.add('slideInDown');
      });
    });
    this.showSlides(this.slideIndex);
    /* вызываем первичную инициализацию, показываем текущий (первый) слайд */
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /* Мини слайдер будет наследоваться от слайдера */
  constructor(container, next, prev, activeClass, animate, autoplay) {
    /* передаем свойства, которые понадобятся из прототипа */
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    /* метод отвечает за декорацию слайдов */
    [...this.slides].forEach(slide => {
      /* перебираем массив всех слайдов и удаляем класс активности */
      slide.classList.remove(this.activeClass);

      if (this.animate) {
        /* если есть анимация, то каждому слайду устанавливаем opacity */
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    if (!this.slides[0].closest('button')) {
      /* если первый слайд не является кнопкой, то добавляем класс активности */
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      /* если есть анимация, то первому слайду устанавливаем opacity */
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    if (this.prev.parentNode === this.container) {
      /* если у кнопки назад родитель является контейнером */
      this.container.insertBefore(this.slides[0], this.prev);
      /* то в контейнере добавляем первый слайд перед кнопкой назад */
    } else {
      this.container.appendChild(this.slides[0]);
      /* если нет, то первый слайд вставляем в конец контейнера */
    }

    this.decorizeSlides();
  }

  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());
    /* при клике на кнопку вперед запускаем метод nextSlide */

    this.prev.addEventListener('click', () => {
      /* при клике на кнопку назад запускаем цикл */
      for (let i = this.slides.length - 1; i > 0; i--) {
        /* запускаем цикл с последнего элемента */
        if (this.slides[i].tagName !== 'BUTTON') {
          /* если элемент с конца не является кнопкой */
          this.container.insertBefore(this.slides[i], this.slides[0]);
          /* последний элемент не кнопку помещаем перед первым элементом */

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

    if (this.autoplay) {
      /* если есть автоплэй, то вешаем событие на блок и стрелки */
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

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  /* Создали один большой прототип слайдера */

  /* Описываем класс кодом, который будет у нас на странице */
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    /* В конструктор помещаем свойства в качестве объекта со значением по умолчанию (какой контейнер, какая кнопка) */

    /* Создаем свойства нового объекта */
    this.container = document.querySelector(container);
    /* получаем текущую страницу */

    this.slides = this.container.children;
    /* получаем детей (каждый отдельный блок) текущей страницы */

    this.btns = document.querySelectorAll(btns);
    /* получаем все текущие кнопки */

    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
    /* текущий слайд равен 1 */
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map