export default class Difference {
    constructor(officer, items) {
        this.officer = document.querySelector(officer);
        this.items = document.querySelectorAll(items);
        this.counter = 0;
    }

    hideItems() {
        this.items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) { /* если элемент массива не является последним */
                item.style.display = 'none';
                item.classList.add('animated');
            }
        });
    }

    bindTriggers() {
        try {
            this.officer.querySelector('.plus').addEventListener('click', () => {
                this.items[this.counter].style.display = 'flex';
                this.items[this.counter].classList.add('fadeIn');
                if (this.counter !== this.items.length - 2) { /* если счетчик не равняется последним двум элементам */
                    this.counter++; 
                } else {
                    this.items[this.items.length - 1].remove(); /* удаляем последний элемент */
                }
            });
        } catch(e){}
    }

    init() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch(e){}
    }
}