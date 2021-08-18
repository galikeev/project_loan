export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers() { /* метод подвязки триггеров к определенным действиям */
        this.btns.forEach((btn, i) => {
            
            try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;
                if (i % 2 == 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch(e) {}

            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = btn;

                    if (document.querySelector('iframe#frame')) { /* если плеер уже есть, то есть такой iframe с таким id */
                        this.overlay.style.display = 'flex'; /* то просто показываем overlay */
                        this.overlay.classList.add('animated', 'fadeIn');
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path});
                        }
                    } else { /* если плеер еще не запускался */
                        this.path = btn.getAttribute('data-url'); /* получаем url из кнопки */
                        this.createPlayer(this.path); /* создаем плеер */
                    }
                }
            });
        });
    }

    bindClose() { /* метод подвязки закрытия */
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.overlay.style.display = 'none';
                this.player.stopVideo();
            }
        });
    }

    createPlayer(url) { /* метод создания плеера */
        this.player = new YT.Player('frame', { /* frame это id какого-то блока, который будем замещать плеером */
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            origin: location.hostname,
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this)
              }
        });
        this.overlay.style.display = 'flex';
        this.overlay.classList.add('animated', 'fadeIn');
    }

    onPlayerStateChange(state) {
        try {
            this.blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            this.playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

            if (state.data === 0) {
                if (this.blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    this.blockedElem.querySelector('.play__circle').classList.remove('closed');
                    this.blockedElem.querySelector('svg').remove();
                    this.blockedElem.querySelector('.play__circle').appendChild(this.playBtn);
                    this.blockedElem.querySelector('.play__text').textContent = 'Play video';
                    this.blockedElem.querySelector('.play__text').classList.remove('attention');
                    this.blockedElem.style.opacity = 1;
                    this.blockedElem.style.filter = 'none';
                    this.blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch(e){}
    }

    init() { /* инициализация всего функционала */
        if (this.btns.length > 0) {
            const tag = document.createElement('script'); /* создаем элемент скрипт */
            tag.src = "https://www.youtube.com/iframe_api"; /* устанавливаем атрибут src */
            const firstScriptTag = document.getElementsByTagName('script')[0]; /* находим первый скрипт */
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); /* перед первым нашим скриптом добавляем этот скрипт */

            this.bindTriggers();
            this.bindClose();
        }
    }
}