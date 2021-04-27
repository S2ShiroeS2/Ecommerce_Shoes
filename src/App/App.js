// eslint-disable-next-line
import React, { useEffect } from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Home from '../pages/Home'

function App() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
            })
        }
    }

    // REMOVE MENU
    const navLink = document.querySelectorAll('.nav__link'),
        navMenu = document.getElementById('nav-menu')

    const linkAction = () => {
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
    //SCROLL SECTIONS ACTIVE LINK
    const sections = document.querySelectorAll('section[id]')
    const scrollActive = () => {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.add('active')
            } else {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.remove('active')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    //CHANGE COLOR HEADER
    window.onscroll = () => {
        const screenY = window.screenY
        const header = document.getElementById('header')
        screenY >= 200
            ? header.classList.add('scroll-header')
            : header.classList.remove('scroll-header')
    }

    showMenu('nav-toggle', 'nav-menu')

    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default App
