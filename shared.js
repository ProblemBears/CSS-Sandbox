let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let buttons = document.querySelectorAll('.plan button');
let noButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", () => 
    {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", () => { 
    mobileNav.classList.remove("open");
    closeModal();
});

if(noButton)
{
    noButton.addEventListener("click", closeModal);
}
function closeModal()
{
    if(modal)
    {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

ctaButton.addEventListener('animationstart', (e) => {
    console.log('Animation Started', e);
});

ctaButton.addEventListener('animationend', (e) => {
    console.log('Animation Ended', e);
});

ctaButton.addEventListener('animationiteration', (e) => {
    console.log('Animation Iteration', e);
});