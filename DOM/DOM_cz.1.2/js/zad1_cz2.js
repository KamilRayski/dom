const tytul = document.querySelector('.title');

const getDataAnimation = (tytul) => {
    
    let dataAnimationValue = tytul.getAttribute('data-animation');
    return dataAnimationValue;
    alert(dataAnimationValue);
    
}

getDataAnimation(tytul);
