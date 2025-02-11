const button = document.querySelector(`.button`);
const imageContainer = document.querySelector(`.container__img`);
const letterContainer = document.querySelector(`.container__letter`);
const title = document.querySelector(`.title`);

const hearts = document.querySelectorAll('.heart');


button.addEventListener(`click`, () => {

    imageContainer.classList.add('container__img__fade__out');
    setTimeout(()=> {
        imageContainer.classList.add(`desactive__element`);
        letterContainer.classList.add(`move__letter`);
        title.classList.add(`move__title`);
        button.classList.add(`button__active`);
    }, 2000);

    setTimeout(()=> {
        animateHearts();
    }, 4000);

}, {once: true});

const animateHearts = () => {
    for(let i = 0; i < hearts.length; i++) {
        hearts[i].classList.add(`heart__animation__`+(i+1));
    }
}