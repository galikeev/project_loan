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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"]('.page', '.next');
  /* Создаем новый объект (экземпляр класса) на основе класса */

  slider.render();
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  /* Называем класс слайдер */

  /* Описываем класс кодом, который будет у нас на странице */
  constructor(page, btns) {
    /* В конструктор помещаем свойства (какая страница, какая кнопка) */

    /* Создаем свойства нового объекта */
    this.page = document.querySelector(page);
    /* получаем текущую страницу */

    this.slides = this.page.children;
    /* получаем детей (каждый отдельный блок) текущей страницы */

    this.btns = document.querySelectorAll(btns);
    /* получаем все текущие кнопки */

    this.slideIndex = 1;
    /* текущий слайд равен 1 */
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map