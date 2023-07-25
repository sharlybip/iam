import React from 'react';
import './index.css';
import { Hero } from './hero';
import { Hamburger } from './hamburger';

const Nav = () =>{
    const [scroll, setScroll] = React.useState(false);

    const scrollNav = () => {
        if (window.scrollY >= 200) {
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
                    <input className="checkbox"  type="checkbox"/>
                    <Hamburger/>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link d-lg-none" href="#">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                                    Homepages
                                </a>
                                <ul className="dropdown-menu  dropdown-menu-arrow " aria-labelledby="menu-1">
                                    <li>
                                        <a className="dropdown-list-group-item" href="./yoga/index.html">
                                            <h4 className="h5 mb-1">Yoga<span className="badge bg-success ms-2 py-1">New</span></h4>
                                            <p className="text-muted mb-0 font-12">
                                                Yoga for good health
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./pages/fitness-coach.html">
                                            <h4 className="h5 mb-1">Fitness</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Fitness landing page
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./index.html">
                                            <h4 className="h5">Coach</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Motivational Speaker
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item " href="./pages/business-coach.html">
                                            <h4 className="h5">Business Coach</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Consulting Business Coach
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item " href="./pages/life-coach.html">
                                            <h4 className="h5">Life Coach</h4>
                                            <p className="text-muted mb-0 font-12">
                                                LifeCoach layout design.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item " href="./pages/ceo-coach.html">
                                            <h4 className="h5">CEO Coaching</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Excellent in CEO Coaching
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                                    Pages
                                </a>
                                <ul className="dropdown-menu   dropdown-menu-xl-start  dropdown-menu-arrow " aria-labelledby="menu-2">
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                                                    <i className="bi bi-stack font-24"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Program</h4>
                                                    <p className="text-muted mb-0 font-12">
                                                        Program cards design.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/program-grid.html">
                                                    Grid</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/program-list.html">
                                                    List </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/program-single.html">
                                                    Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                                                    <i className="bi bi-calendar font-24"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Events</h4>
                                                    <p className="text-muted mb-0 font-12">
                                                        Create your own event page.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/events.html">
                                                    List</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/event-single.html">
                                                    Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                                                    <i className="bi bi-mic-fill font-24"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Podcast</h4>
                                                    <p className="text-muted mb-0 font-12">
                                                        Promote your podcast easy.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/podcast.html">
                                                    List</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/podcast-thumbnail.html">
                                                    Thumbnail</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/podcast-single.html">
                                                    Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                                                    <i className="bi bi-file-earmark-richtext-fill font-24"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Courses</h4>
                                                    <p className="text-muted mb-0 font-12">
                                                        Create online learning courses.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/course-thumbnail.html">
                                                    Grid</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/course-single.html">
                                                    Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                                                    <i className="bi bi-gear-fill font-24"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Utilities</h4>
                                                    <p className="text-muted mb-0 font-12">
                                                        Additional Pages
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/pricing.html">
                                                    Pricing </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/about-me.html">
                                                    About me</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/team-page.html">
                                                    Team</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/contact.html">
                                                    Contact</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/error-page.html">
                                                    Error</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/terms-and-condition.html">
                                                    Terms &amp; Condition</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow  dropdown-menu-xl-start " aria-labelledby="menu-3">
                                    <li>
                                        <a className="dropdown-item" href="./pages/blog.html">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/blog-author.html">
                                            Blog Author
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/blog-category.html">
                                            Blog Category
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/blog-classNameic.html">
                                            Blog classNameic
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/blog-single.html">
                                            Blog Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu dropdown-menu-md dropdown-menu-arrow  dropdown-menu-xl-start " aria-labelledby="menu-4">
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <h4 className="h5 ">Case Study</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Case Study Element Design
                                            </p>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/case-studies.html">
                                                    Case Study</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/case-study-single.html">
                                                    Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#">
                                            <h4 className="h5">Help Center </h4>
                                            <p className="text-muted mb-0 font-12">
                                                Beautiful help center design.
                                            </p>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/help-center.html">
                                                    Help</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/help-center-category.html">
                                                    Category</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/help-center-article.html">
                                                    Category Article</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/help-center-profile-member.html">
                                                    Help Center Profile</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-list-group-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <h4 className="h5">Webinar</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Webinar Landing Page Design
                                            </p>
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/coach-webinar.html">
                                                    Webinar List </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/coach-webinar-single.html">
                                                    Webinar Single </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/coach-webinar-booking.html">
                                                    Webinar Booking </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./pages/book-download-page.html">
                                            <h4 className="h5">Download Book</h4>
                                            <p className="text-muted mb-0 font-12">
                                                Download the book for guide.
                                            </p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./pages/stories.html">
                                            <div>
                                                <h4 className="h5">Success Stories</h4>
                                                <p className="text-muted mb-0 font-12">
                                                    See what our clients say &amp; stories.
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./pages/booking-page.html">
                                            <div>
                                                <h4 className="h5">Free Session Booking</h4>
                                                <p className="text-muted mb-0 font-12">
                                                    Your 60-minute Free Coaching Session.
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow  dropdown-menu-xl-start " aria-labelledby="menu-5">
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-item dropdown-toggle" href="#">
                                            Sign In
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/signin-cover.html">
                                                    Side Cover </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/signin.html">
                                                    Basic</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-item dropdown-toggle" href="#">
                                            Sign Up
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/signup-cover.html">
                                                    Side Cover </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/signup.html">
                                                    Basic</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/verify-code.html">
                                            Verify Code
                                        </a>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-item dropdown-toggle" href="#">
                                            Password Reset
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/password-reset-cover.html">
                                                    Side Cover</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/password-reset.html">
                                                    Basic</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu ">
                                        <a className="dropdown-item dropdown-toggle" href="#">
                                            Setting
                                        </a>
                                        <ul className=" dropdown-menu-lg-end">
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-profile.html">
                                                    Profile</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-subscription.html">
                                                    Subscription</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-security.html">
                                                    Security</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-notifications.html">
                                                    Notifications</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-user.html">
                                                    Users</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-payment-plan.html">
                                                    Payment Plan</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="./pages/dashboard-payment-history.html">
                                                    Payment History</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="menu-6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow  dropdown-menu-xl-start " aria-labelledby="menu-6">
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop.html">
                                            Product
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop-single.html">
                                            Product Single
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop-cart.html">
                                            Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop-checkout.html">
                                            Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop-empty-cart.html">
                                            Empty Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./pages/shop-order-completed.html">
                                            Order Completed
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown dropstart">
                                <a className="nav-link " href="#" id="menu-7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Docs
                                </a>
                                <ul className="dropdown-menu dropdown-menu-arrow  dropdown-menu-md  " aria-labelledby="menu-7">
                                    <li>
                                        <a className="dropdown-list-group-item" href="./docs/index.html">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">
                                                    <i className="bi bi-file-text-fill font-24"></i>
                                                </span>
                                                <div>
                                                    <h5 className="mb-0">Documentation</h5>
                                                    <span className="font-12 text-muted">Customizing and Create</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./docs/snippet-overview.html">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3"> <i className="bi bi-layers-fill font-24"></i>
                                                </span>
                                                <div>
                                                    <h5 className="mb-0">Components</h5>
                                                    <span className="font-12 text-muted">Ready to use list of components</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="./docs/changelog.html">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">
                                                    <i className="bi bi-file-earmark-text-fill font-24"></i>
                                                </span>
                                                <div>
                                                    <h5 className=" mb-0 ">Changelog <span className="text-primary font-12 ml-1 ">v.2.1.0</span></h5>
                                                    <span className="font-12 text-muted ">All notable changes in track</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-list-group-item" href="https://codescandy.com/coach/rtl/index.html">
                                            <div className="d-flex align-items-center">
                                                <span className="me-3">
                                                    <i className="bi bi-toggle-on font-24"></i>
                                                </span>
                                                <div>
                                                    <h5 className=" mb-0 ">RTL Demo</h5>
                                                    <span className="font-12 text-muted ">RTL Pages</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="header-btn ">
                            <a href="https://bit.ly/38DGpi8 " className="btn btn-primary btn-sm ">Buy Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
        <Hero/>
    </section>
    )
}
export {Nav}