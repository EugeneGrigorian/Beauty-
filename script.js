const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const callButtons = document.querySelectorAll('.btn');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

popupToggle = () => {
    popup.classList.toggle('popup_opened');
}

closeOnBlack = (event) => {
    if (event.target === event.currentTarget) popupToggle();
}

callButtons.forEach(callButton => {
    callButton.addEventListener('click', popupToggle);
})
closeButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closeOnBlack);

