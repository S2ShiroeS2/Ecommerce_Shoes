// eslint-disable-next-line
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LayoutWrapper from 'layouts/LayoutWrapper'
import { Home, MenPage } from 'pages/index'
import RouteWrapper from 'routes/RouteWrapper'

function App() {
    // REMOVE MENU
    const navLink = document.querySelectorAll('.nav__link'),
        navMenu = document.getElementById('nav-menu')

    const linkAction = () => {
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    //CHANGE COLOR HEADER
    window.onscroll = () => {
        const screenY = window.screenY
        const header = document.getElementById('header')
        screenY >= 200
            ? header.classList.add('scroll-header')
            : header.classList.remove('scroll-header')
    }

    useEffect(() => {
        //SCROLL SECTIONS ACTIVE LINK
        const sections = document.querySelectorAll('section[id]')
        const scrollActive = () => {
            const scrollY = window.pageYOffset

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50,
                    sectionId = current.getAttribute('id')

                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionHeight + sectionTop
                ) {
                    document
                        ?.querySelector('.nav__menu a[href*=' + sectionId + ']')
                        ?.classList.add('active')
                } else {
                    document
                        ?.querySelector('.nav__menu a[href*=' + sectionId + ']')
                        ?.classList.remove('active')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
    }, [])

    return (
        <BrowserRouter>
            <RouteWrapper
                exact
                path="/"
                component={Home}
                layout={LayoutWrapper}
            />
            <RouteWrapper
                path="/Mens"
                component={MenPage}
                layout={LayoutWrapper}
            />
        </BrowserRouter>
    )
}

export default App
