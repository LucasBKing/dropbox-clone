class DropBoxController {

    constructor() {
        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snakeModalEl = document.querySelector('#react-snackbar-root');

        this.initEvents();
    }

    initEvents() {
        this.btnSendFileEl.addEventListener('click', event => {
            this.inputFilesEl.click();
        });

        this.inputFilesEl.addEventListener('change', event => {
            console.log(event.target.files);

            this.snakeModalEl.style.display = 'block';
        });
    }
}