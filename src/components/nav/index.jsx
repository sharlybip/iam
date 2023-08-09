import React from 'react';
import './index.css';
import { Hero } from './hero';
import { NavbarCollapse } from './navbar-collapse';
// import { Hamburger } from './hamburger';

const Nav = () =>{
    const [scroll, setScroll] = React.useState(false);
    
    const scrollNav = () => {
        if (window.scrollY >= 200 && window.screen.width > 992) {
            // if(window.screen.width < 992) 
            setScroll(true)
        }
        else if (window.scrollY >= 50 && window.screen.width < 992) {
            // if(window.screen.width < 992) 
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', scrollNav)
    
    return (
        <section className='nav'>
        <nav className="navbar">
            <div className={scroll ? 'container-nav navbar-blue' : 'container-nav navbar-trans'}>
                <div className='container-navbar-container'>
                    <a href="./index.html"><img src='https://codescandy.com/coach/bootstrap-5/assets/images/logo.svg' alt=""/></a> 
                    <div className='hamburger-container'>
                        <input className="checkbox checkbox-menu" id='check'  type="checkbox"/>
                        <div className="hamburger">
                            <div 
                                className="hamburger-stripe stripe-1">
                                </div>
                            <div 
                                className="hamburger-stripe stripe-2">
                                </div>
                            <div 
                                className="hamburger-stripe stripe-3">
                                </div>
                        </div>
                        <NavbarCollapse/>
                        </div>
                </div>

            </div>
        </nav>
        <Hero/>
    </section>
    )
}
export {Nav}