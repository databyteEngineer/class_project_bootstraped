

// GEt Model Elements
var modal = document.getElementById("andrew-modal");

// Get open modal button
var modalBtn = document.getElementById("modal-btn");

// Get Close button
var closeBtn = document.getElementsByClassName("close-btn")[0];


// Event Listener open modal
modalBtn.addEventListener("click", openModal);

// Event Listener close modal
closeBtn.addEventListener("click", closeModal);

// Event Listener window
window.addEventListener("click", clickOutside);

// Function to open modalBtn
function openModal() {
    modal.style.display = "block";
}

// Function to close modalBtn
function closeModal() {
    modal.style.display = "none";
}

// Function to close modalBtn
function clickOutside() {
    if(e.target == modal) {
        modal.style.display = "none";
    }

}
