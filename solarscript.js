/** background-color change for the pages bootstrap container **/
const li = document.querySelectorAll('li');
li.forEach(bgcolor);
function bgcolor(value, index, array) {
    value.style.backgroundColor = "limegreen";
}

/** Dropdown menu and its content **/
var dropdown = document.getElementById('dropdown');
var popup = document.getElementById('popup');
var body = document.querySelector('body');
dropdown.style.display = 'inline-block';
dropdown.style.position = 'relative';

function ddown() {
    popup.style.display = 'block';
    function ddtoggle() {
        popup.style.display = 'none';
    }
    dropdown.addEventListener("mouseout", ddtoggle);
}
dropdown.addEventListener("mouseover", ddown);

/** desi design */
document.getElementById('desi').style.color = 'limegreen';
