const menuEmail = document.querySelector('.navbar-email');
const iconBurguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProductDeatil = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu () {
    const isAsideMenuClosed = asideProductDeatil.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        asideProductDeatil.classList.add('inactive');        
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    const isAsideMenuClosed = asideProductDeatil.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        asideProductDeatil.classList.add('inactive');        
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    asideProductDeatil.classList.toggle('inactive');
}