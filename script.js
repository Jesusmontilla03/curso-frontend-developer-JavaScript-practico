const btnEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMenuMobile = document.querySelector('.button-menu-mobile');
const menuMobile = document.querySelector('.mobile-menu');

classActiveToggle(btnEmail, desktopMenu);
classActiveToggle(btnMenuMobile, menuMobile);

let selectorList = [desktopMenu, menuMobile];

function classActiveToggle (btn, selectorElement) {
    btn.addEventListener('click', () => {

        let selectorFilter = selectorList.indexOf(selectorElement);
        selectorList.splice(selectorFilter, 1);
        // Se filtra el selector usado en la funcion para no ser afectado por el forEach.

        selectorList.forEach( selector => {
            selector.classList.remove('active')
        });

        selectorElement.classList.toggle('active');
        selectorList.push(selectorElement);
        // Se agrega nuevamente el selector filtrado para ser usado correctamente luego.
    })
}