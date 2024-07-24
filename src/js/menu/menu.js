const modals = document.querySelector('.modals');


{

    const currModal = modals.querySelector('.modals__modal--feedback');
    const cross = currModal.querySelector('.modal__cross');
    cross.addEventListener('click', ()=>modals.classList.toggle('modals--feedback'));
    const buttons = document.querySelectorAll('.button--chat');
    buttons.forEach(e => {
        e.addEventListener('click', ()=>modals.classList.toggle('modals--feedback'));
    });
}

{
    const currModal = modals.querySelector('.modals__modal--call');
    const cross = currModal.querySelector('.modal__cross');
    cross.addEventListener('click', ()=>modals.classList.toggle('modals--call'));
    const buttons = document.querySelectorAll('.button--call');
    buttons.forEach(e => {
        e.addEventListener('click', ()=>modals.classList.toggle('modals--call'));
    });
}
{
   
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width >= 1000) {
                modals.classList.remove('modals--mobile-menu');
            }
        });

    const currModal = modals.querySelector(".modals__modal--mobile-menu");
    const cross = currModal.querySelector(".menu-header__button");
    cross.addEventListener('click', ()=>modals.classList.toggle("modals--mobile-menu"));
    const buttons = document.querySelectorAll(".header__button--burger");
    buttons.forEach(e => {
        e.addEventListener('click', ()=>modals.classList.toggle("modals--mobile-menu"));
    });
}
