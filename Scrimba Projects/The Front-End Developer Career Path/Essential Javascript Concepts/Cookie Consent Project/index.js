const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
let modalTxt = document.getElementById('modal-text')

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    modalTxt.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    `
})
