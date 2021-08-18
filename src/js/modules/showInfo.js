export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', function () {
                try {
                    this.sibling = btn.closest('.module__info-show').nextElementSibling;

                    this.sibling.classList.toggle('msg');
                    this.sibling.classList.add('animated', 'fadeIn');
                    this.sibling.style.marginTop = '20px';
                } catch(e){}
            });
        });
    }
}

