const liwnav= document.querySelectorAll('nav li');

const setDataDirection = (elements) => {
    elements.forEach(element => {
        element.dataset.direction = "top";
    });
}
setDataDirection(liwnav);