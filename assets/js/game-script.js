// When DOM fully loaded add listeners to handle user interface events

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("instructions-button").addEventListener("click", function() {
        document.getElementById("instructions").classList.toggle("hide-instructions");
    })
})