// BURGER
const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('none')
});

// COOKIE CLOSED
const btnClose = document.querySelector('.btn-close');
const btnDecline = document.querySelector('.btn-decline');
const btnAccept = document.querySelector('.btn-accept');

btnClose.addEventListener('click', closed);
btnDecline.addEventListener('click', closed);
btnAccept.addEventListener('click', closed);

function closed ()  {
    document.querySelector('.cookie').classList.toggle('none');
}


