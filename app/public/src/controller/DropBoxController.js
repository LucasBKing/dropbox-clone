class DropBoxController {

    constructor() {
        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snakeModalEl = document.querySelector('#react-snackbar-root');

        this.initEvents();
    }

    initEvents() {
        // Event that handle when user clicks on "Send Files"
        this.btnSendFileEl.addEventListener('click', event => {
            this.inputFilesEl.click();
        });

        // Event that show on screen the Progress Bar Model
        this.inputFilesEl.addEventListener('change', event => {

            // Send to uploadTask the selected files
            this.uploadTask(event.target.files);

            this.snakeModalEl.style.display = 'block';
        });
    }

    /**
     * 
     * @param files collection (!array) 
     * 
     * Convert files to array with spread
     */
    uploadTask(files) {
        // Each file will have a promise
        let promises = [];


        [...files].forEach( file => {
            promises.push(new Promise ((resolve, reject) => {
                // Sending with Ajax
                let ajax = new XMLHttpRequest();
                let formData = new FormData();
                // Method and folder
                ajax.open('POST', '/upload');

                // Server return
                ajax.onload = event => {
                    try {
                        resolve(JSON.parse(ajax.responseText)); 
                    } catch(e) {
                        reject(e);
                    }
                };

                ajax.onerror = event => {
                    reject(event);
                };

                formData.append('input-files', file);

                ajax.send(formData);


            }));
        });

        return Promise.all(promises);
    }
}
