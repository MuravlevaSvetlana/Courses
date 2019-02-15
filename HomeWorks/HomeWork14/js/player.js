class VideoPlayer {
    constructor(settings) {
        this._settings = Object.assign(VideoPlayer.DefaultSettings, settings);
    }

    init() {
        if (!this._settings.videoUrl) return console.error('Provide video Url');
        if (!this._settings.videoPlayerContainer) return console.error('Please provide video player container');

        // Создаем разметку для video
        this._addTemplate();
        // Найти все элементы управления
        this._setElements();
        // Установить обработчики событий
        this._setEvents();
    }

    toggle() {
        const method = this._video.paused ? 'play' : 'pause';
        this._toggleBtn.textContent = this._video.paused ? '❚ ❚' :  '►';
        this._video[method]();
    }

    _videoProgressHandler() {
        const percent = (this._video.currentTime / this._video.duration) * 100;
        this._progress.style.flexBasis = `${percent}%`;
    }

    _rewind(event) {
        this._video.currentTime = (event.offsetX / this._progressContainer.offsetWidth) * this._video.duration;
    }

    _addTemplate() {
        const template = this._createVideoTemplate();
        const container = document.querySelector(this._settings.videoPlayerContainer);
        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('Video container was not found');
    }
    // функция callback для громости
    volumeHandler() {
        this._video.volume = this._volume.value;
    }
    // функция callback для ускорения воспроизведения
    _playbackRateHandler() {
        this._video.playbackRate = this._playbackRate.value;
    }
    // функция callback для перемотки назад на секунды
    _playBackHandler() {
        let formula = /\D+/ig;
        let number = this._playBack.innerHTML.replace(formula, '');
        this._video.currentTime -= number;
    }
    // функция callback для перемотки вперед на секунды
    _playForwardHandler() {
        this._video.currentTime += parseFloat(this._playForward.innerHTML);
    }
    // функция callback для перемотки двойным кликом
    _rewindDbl(event) {
        if (event.offsetX <= 159) return this._playBackHandler();
        if (event.offsetX >= 160) return this._playForwardHandler();
    }

    _setElements() {
        this._videoContainer = document.querySelector(this._settings.videoPlayerContainer);
        this._video = this._videoContainer.querySelector('video');
        this._toggleBtn = this._videoContainer.querySelector('.toggle');
        this._progress = this._videoContainer.querySelector('.progress__filled');
        this._progressContainer = this._videoContainer.querySelector('.progress');
        this._volume = this._videoContainer.querySelector('[name="volume"]');
        this._playbackRate = this._videoContainer.querySelector('[name="playbackRate"]');
        this._playBack = this._videoContainer.querySelector('[data-skip="-1"]');
        this._playForward = this._videoContainer.querySelector('[data-skip="1"]');
    }

    _setEvents() {
        this._video.addEventListener('click', () => this.toggle());
        this._video.addEventListener('dblclick', (event) => this._rewindDbl(event));
        this._toggleBtn.addEventListener('click', () => this.toggle());
        this._video.addEventListener('timeupdate', () => this._videoProgressHandler());
        this._progressContainer.addEventListener('click', (event) => this._rewind(event));
        this._volume.addEventListener('change', () => this.volumeHandler());
        this._playbackRate.addEventListener('change', () => this._playbackRateHandler());
        this._playBack.addEventListener('click', () => this._playBackHandler());
        this._playForward.addEventListener('click', () => this._playForwardHandler());
    }

    _createVideoTemplate() {
        return `
        <div class="player">
            <video class="player__video viewer" src="${this._settings.videoUrl}"> </video>
            <div class="player__controls">
              <div class="progress">
              <div class="progress__filled"></div>
              </div>
              <button class="player__button toggle" title="Toggle Play">►</button>
              <input type="range" name="volume" class="player__slider" min=0 max="1" step="0.05" value="${this._settings.volume}">
              <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="${this._settings.volume}">
              <button data-skip="-1" class="player__button">« ${this._settings.play}s</button>
              <button data-skip="1" class="player__button">${this._settings.play}s »</button>
            </div>
      </div>
        `;
    }

    static get DefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: 'body',
            volume: 1,
            play:1
        }
    }
}

const playerInstance = new VideoPlayer({
    videoUrl: 'video/mov_bbb.mp4',
    volume: 0.5,
    play:2
});

playerInstance.init();
