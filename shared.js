let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let buttons = document.querySelectorAll('.plan button');
let noButton = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

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
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});