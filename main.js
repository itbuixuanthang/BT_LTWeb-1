var button = document.querySelector('h1');
var isRed = false;

function changeColor() {
    if (isRed) {
        button.classList.remove('red-color');
        isRed = false;
    } else {
        button.classList.add('red-color');
        isRed = true;
    }
}