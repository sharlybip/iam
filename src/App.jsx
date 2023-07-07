import React from 'react';
import './App.css'

const App = () => {
    const [scroll, setScroll] = React.useState(false);

    const scrollNav = () => {
        if (window.scrollY >= 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', scrollNav)

  return (
    <>
    <section>
        <nav className="navbar navbar-expand-lg navbar-default fixed-top border-3 border-top border-primary navbar-dark">
            <div className={scroll ? 'container-nav navbar-blue' : 'container-nav navbar'}>
                <a className="navbar-brand @@brandLogo" href="./index.html"><img src='https://codescandy.com/coach/bootstrap-5/assets/images/logo.svg' alt=""/></a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar mt-0"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="navbar-nav ms-auto me-lg-3 ">
                        <li className="nav-item dropdown disabled">
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
        </nav>
        <div className="hero">
            <div className="hero-image">
            <div className="pt-17 pb-13 pt-lg-19 pb-lg-19 text-center text-light">
                <h1 className="display-3 text-white mb-3 lh-1">
                Become the hero of your own story
                </h1>
                <p className="px-xl-18 px-md-10 mb-5 lead">
                Join our Coach community of like-minded individuals. Get your ticket to the 2021 event.
                </p>
                <a href="pages/signin.html" className="btn btn-primary btn-lg">Get Ticket</a>
            </div>
            </div>
        </div>
    </section>
    <section className="beginnings">
        <div className="beginnings-container">
            <div className="beginnings-title-description">
                <h2 className="mb-3 h1">A Boy Before Coach</h2>
                <p className="lead">
                Before Coach became a media sensation for empowering people and
                sharing Inspiration across the globe, he had his share of
                obstacles to overcome.
                </p>
            </div>
            <div className="beginnings-photos">
                <div className="beginnings-photos-2">
                    <div className='photos2-container' >
                        <div className="">
                            <img src="https://media.istockphoto.com/id/1303500951/es/foto/retrato-de-larga-duraci%C3%B3n-de-una-empresaria-asi%C3%A1tica-sonriente.jpg?s=612x612&w=0&k=20&c=WWcgATVjRA0BAH4oDXHfRCbqQm7tzZmJpvt0djAXFXw=" alt="porfile" className="img-fluid rounded h-100 w-100 img-hover-zoom--basic"/>
                        </div>
                        <div>
                            <img src="https://media.istockphoto.com/id/1200677760/es/foto/retrato-de-apuesto-joven-sonriente-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=RhKR8pxX3y_YVe5CjrRnTcNFEGDryD2FVOcUT_w3m4w=" alt="profile" className="img-fluid rounded h-100 w-100"/>
                        </div>
                    </div>
                </div>
                <div className="beginnings-photos-desc">
                    <p>
                        From having a learning disability, which led to being alone and
                        bullied in school, to being sexually abused as a child, to being
                        injured and broke on his sister’s couch, The Coach story is the
                        perfect example of how anybody can overcome the obstacles in their
                        life and achieve greatness.
                    </p>
                    <div className="beginnings-photos-desc-photos">
                        <div className="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                            <img src="https://media.istockphoto.com/id/514132585/es/foto/esta-chica-sabe-c%C3%B3mo-divertirse.jpg?s=612x612&w=0&k=20&c=5301UTmnmExKdTotOQFja1lcQfw3EPiavLcB9-viebY=" alt="profile" className="img-fluid h-100 rounded w-100"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                            <img src="https://media.istockphoto.com/id/1124393111/es/foto/hombre-guapo-vistiendo-casual-blanco-camiseta-waiving-diciendo-hola-feliz-y-sonriente-amable.jpg?s=612x612&w=0&k=20&c=sv-e9XJutr8lkY46qk6mbev2A6jSbbLxsRFHXvC2sq4=" alt="profile" className="img-fluid h-100 rounded w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='email'>
        <div className="email-container">
            <div className="email-container-title-desc">
                <div className="title">
                    <h2 className="h1 mb-3">
                        Make following your passion your full time job
                    </h2>
                    <p>
                        Learn How To Play A Different Game In Business With Your Own
                        Rules
                    </p>
                </div>
                <div className="email-form-container">
                    <form className="email-form">
                        <div>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required=""/>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required=""/>                        
                            <button className=" btn-warning" type="submit">Submit</button>
                            
                        </div>
                        <small className="text-muted">We will never send you spam.</small>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section className="entertainment">
        <div className="entertainment-container">
            <div className="entertainment-container-item">
                <div className="description">
                    <h2 className="display-4 text-white mb-3">
                    Books, Podcast, Courses &amp; More
                    </h2>
                    <p className="lead mb-0">
                    Ready for more? Listen to the latest podcast episode, see when
                    John is headed to your neck of the woods, stock up on business
                    courses, books, gear, and more.
                    </p>
                </div>
            </div>
            <div className="entertainment-container-item">
                <div className="img-overlay img-zoom">
                    <a href="#">
                        <img className="rounded img-fluid w-100"    src="https://media.istockphoto.com/id/1146224410/es/foto/gente-de-negocios-borrosa-en-su-camino-del-trabajo.jpg?s=612x612&w=0&k=20&c=gMYs_n6vjvVOgOWMg5nKDn6RG2d_hZmy7nJ3K9KJmJ0=" alt="podcast"/>
                    </a>
                    <div className="caption">
                        <a href="pages/podcast.html" className="btn btn-outline-white btn-lg">Podcast</a>
                    </div>
                </div>
            </div>
            <div className="entertainment-container-item">
                <div className="img-overlay img-zoom">
                    <a href="#">
                        <img className="rounded img-fluid w-100" src="https://media.istockphoto.com/id/1347652268/es/foto/grupo-de-colegas-celebrando-el-%C3%A9xito.jpg?s=612x612&w=0&k=20&c=jfKzoa5C2sTvt6HiX3KcxufKGttcIrfhvxm_tWHt2GQ=" alt="events"/>
                    </a>
                    <div className="caption">
                        <a href="pages/events.html" className="btn btn-outline-white btn-lg">Events</a>
                    </div>
                </div>
            </div>
            <div className="entertainment-container-item">
                <div className="img-overlay img-zoom">
                    <a href="#">
                        <img className="rounded img-fluid w-100" src="https://media.istockphoto.com/id/1289220949/es/foto/mujer-sonriente-exitosa-con-gafas-en-la-pared-gris.jpg?s=612x612&w=0&k=20&c=vH5cbmaJoJHJ_BWv9IBF1wri-4GwbhGrmJVcGcEhkCk=" alt="course"/>
                    </a>
                    <div className="caption">
                    <a href="pages/program-list.html" className="btn btn-outline-white btn-lg">Courses</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default App