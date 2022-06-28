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
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", () => { 
    mobileNav.style.display = 'none'; 
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
        modal.style.display = "none";
    }
    backdrop.style.display = "none";
}

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});