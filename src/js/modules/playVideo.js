export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers() { /* метод подвязки триггеров к определенным действиям */
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) { /* если плеер уже есть, то есть такой iframe с таким id */
                    this.overlay.style.display = 'flex'; /* то просто показываем overlay */
                    this.overlay.classList.add('animated', 'fadeIn');
                } else { /* если плеер еще не запускался */
                    const path = btn.getAttribute('data-url'); /* получаем url из кнопки */
                    this.createPlayer(path); /* создаем плеер */
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
            origin: location.hostname
        });
        this.overlay.style.display = 'flex';
        this.overlay.classList.add('animated', 'fadeIn');
    }

    init() { /* инициализация всего функционала */
        const tag = document.createElement('script'); /* создаем элемент скрипт */
        tag.src = "https://www.youtube.com/iframe_api"; /* устанавливаем атрибут src */
        const firstScriptTag = document.getElementsByTagName('script')[0]; /* находим первый скрипт */
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); /* перед первым нашим скриптом добавляем этот скрипт */

        this.bindTriggers();
        this.bindClose();
    }
}