// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');
// REMOVE MENU
const navLink = document.querySelectorAll('.nav__link'),
navMenu = document.getElementById('nav-menu');

const linkAction = () => {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

//CHANGE COLOR HEADER
window.onscroll = () => {
    const header = document.getElementById('header');
    this.screenY >= 200 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

//SHOW MENU SHORT
const showMenuShort = (btn, box, show, icon_bf, icon_af) => {
    var box_menu = document.querySelector(box),
    btn_short = document.querySelector(btn),
    icon_ = document.querySelector(icon_bf);
    if(box_menu && btn_short) {
        btn_short.addEventListener('click', () => {
            box_menu.classList.toggle(show);
            icon_.classList.toggle(icon_af);
        });
    }
}

showMenuShort('.main-header__short', '.main-header__short--wapper', 'is-show-menu-short', '.bx.bxs-chevron-down', 'bxs-chevron-up');