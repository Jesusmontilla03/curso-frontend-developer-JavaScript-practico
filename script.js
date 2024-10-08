const btnEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMenuMobile = document.querySelector('.button-menu-mobile');
const menuMobile = document.querySelector('.mobile-menu');

classActiveToggle(btnEmail, desktopMenu);
classActiveToggle(btnMenuMobile, menuMobile);

selectorList = [desktopMenu, menuMobile];

function classActiveToggle (btn, selectorElement) {
    btn.addEventListener('click', () => {

        selectorList.forEach( selector => {
            selector.classList.remove('active')
        });

        selectorElement.classList.toggle('active');
    })
}