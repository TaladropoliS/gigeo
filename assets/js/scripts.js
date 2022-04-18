// JAVASCRIPT (para los tooltip de Bootstrap 5)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// JAVASCRIPT (oculta el logo al desplegar el menu en mobile)
function myFunction() {
    var n = document.getElementById('div-logo');
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        n.className = 'none';
    } else {
        x.className = "topnav";
        n.className = 'blok';
    }
}

