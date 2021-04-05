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

// SHOW BOX SEARCH MOBILE
const isShowBoxSearch = (btn_open, btn_close) => {
    var click_Open = document.querySelector(btn_open),
    click_Close = document.querySelector(btn_close),
    box_Search = document.querySelector('.nav__search-box'),
    btn_Search_Overlay = document.querySelector('.btn-overlay-search')
    input_Search = document.querySelector('.nav__search-box--input-search');

    click_Open.addEventListener('click', () => {
        box_Search.classList.add('active-search-box');
        click_Close.classList.remove('is-none-btn');
        click_Open.classList.add('is-show-btn-search');
        btn_Search_Overlay.classList.remove('is-none');
        input_Search.classList.add('active-search-input');
        input_Search.classList.remove('is-none');
    });
    click_Close.addEventListener('click', () => {
        box_Search.classList.remove('active-search-box');
        click_Close.classList.add('is-none-btn');
        click_Open.classList.remove('is-show-btn-search');
        btn_Search_Overlay.classList.add('is-none');
        input_Search.classList.remove('active-search-input');
        input_Search.classList.add('is-none');
    });
}

isShowBoxSearch('.btn-search', '.nav__close-search-box');