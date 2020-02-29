var modal = document.getElementById("modal");
var closeBtn = document.getElementById("closeBtn");
var openModalBtn = document.getElementById("openModalBtn");

openModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideModal);

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function outsideModal(event) {
    if (event.target == modal) {
        closeModal();
    }
}