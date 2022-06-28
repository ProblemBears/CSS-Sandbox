let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let buttons = document.querySelectorAll('.plan button');
let noButton = document.querySelector(".modal__action--negative");

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", () => 
    {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", closeModal);

noButton.addEventListener("click", closeModal);

function closeModal()
{
    modal.style.display = "none";
    backdrop.style.display = "none";
}