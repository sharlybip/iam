import './index.css';
import icon from '../../../assets/icons8-papel-100.png';
import { SubmenuImage } from './menu-submenu-image';
import { ListLinks } from './list-links';
import { MenuSubmenu } from './menu-submenu';
import { MenuSubmenu_NoNextSubmenu } from './menu-submenu-noNextsubmenu';
import { ListLinksSubmenu } from './list-links-submenu';
import { SubmenuImage_noNextSubmenu } from './menu-submenu-image-noNextSubmenu';

const NavbarCollapse = () => {
    return (
        <div className="navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link-title" href="#">
                        Menu
                    </span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#" id="menu-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                        Home
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="menu-1">
                        <MenuSubmenu_NoNextSubmenu
                            name = "Log out"
                            description="Remeber me"
                            newer="new music"
                        />
                        <SubmenuImage 
                            icon = {icon}
                            title = "Program"
                            description = "Program cards design."
                            list = {[
                                {id: 1, name: "Grid"},
                                {id: 2, name: "List"},
                                {id: 3, name: "Single"},
                            ]}
                        />
                        <MenuSubmenu
                            name = "Case Study"
                            description= "Case Study Element Design"
                            list = {[
                                {id: 1, name: "Case of Study", href:"./pages/case-studies.html"},
                                {id: 2, name: "Single", href:"./pages/case-study-single.html"}
                            ]}
                        />
                    </ul>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#" id="menu-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                        Homepages
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="menu-1">
                        <MenuSubmenu_NoNextSubmenu
                            name = "Yoga"
                            description= "Yoga for good health"
                            newer = "New"
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Fitness"
                            description= "Fitness landing page"
                            newer = ""
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Coach"
                            description= "Motivational Speaker"
                            newer = ""
                        /> 
                        <MenuSubmenu_NoNextSubmenu
                            name = "Business Coach"
                            description= "Consulting Business Coach"
                            newer = ""
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Life Coach"
                            description= "LifeCoach layout design"
                            newer = ""
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "CEO Coaching"
                            description= "Excellent in CEO Coaching"
                            newer = ""
                        />
                    </ul>
                </li>
                <li className="nav-item">
                    <span className="nav-link">
                        Pages
                    </span>
                    <ul className="dropdown-menu">
                        <SubmenuImage 
                            icon = {icon}
                            title = "Program"
                            description = "Program cards design."
                            list = {[
                                {id: 1, name: "Grid"},
                                {id: 2, name: "List"},
                                {id: 3, name: "Single"},
                            ]}
                        />
                        <SubmenuImage 
                            icon = {icon}
                            title = "Events"
                            description = "Create your own event page"
                            list = {[
                                {id: 2, name: "List"},
                                {id: 1, name: "Sigle"},
                            ]}
                        />
                        <SubmenuImage 
                            icon = {icon}
                            title = "Podcast"
                            description = "Promote your podcast easy"
                            list = {[
                                {id: 2, name: "List"},
                                {id: 1, name: "Thumbnail"},
                                {id: 3, name: "Single"},
                            ]}
                        />
                        <SubmenuImage 
                            icon = {icon}
                            title = "Courses"
                            description = "Create online learning courses"
                            list = {[
                                {id: 1, name: "Grid"},
                                {id: 3, name: "Single"},
                            ]}
                        />
                        <SubmenuImage 
                            icon = {icon}
                            title = "Utilities"
                            description = " Additional Pages"
                            list = {[
                                {id: 1, name: "Pricing"},
                                {id: 2, name: "About me"},
                                {id: 3, name: "Team"},
                                {id: 4, name: "Contact"},
                                {id: 5, name: "Error"},
                                {id: 6, name: "Terms & Condition"},

                            ]}
                        />
                    </ul>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#">
                        Blog
                    </span>
                    <ul className="dropdown-menu">
                        <ListLinks
                            name = "Blog"
                            href = './pages/blog.html'
                        />
                        <ListLinks
                            name = "Blog Author"
                            href = './pages/blog-author.html'
                        />
                        <ListLinks
                            name = "Blog Category"
                            href = './pages/blog-category.html'
                        />
                        <ListLinks
                            name = "Blog classNameic"
                            href = './pages/blog-classNameic.html'
                        />
                        <ListLinks
                            name = "Blog Single"
                            href = './pages/blog-single.html'
                        />
                    </ul>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#">
                        Resources
                    </span>
                    <ul className="dropdown-menu">
                        <MenuSubmenu
                            name = "Case Study"
                            description= "Case Study Element Design"
                            list = {[
                                {id: 1, name: "Case of Study", href:"./pages/case-studies.html"},
                                {id: 2, name: "Single", href:"./pages/case-study-single.html"}
                            ]}
                        />
                        <MenuSubmenu
                            name = "Help Center"
                            description= " Beautiful help center design"
                            list = {[
                                {id: 1, name: "Help", href: "./pages/help-center.html"},
                                {id: 2, name: "Category", href: "./pages/help-center-category.html"},
                                {id: 3, name: "Category Article", href: "./pages/help-center-article.html"},
                                {id: 4, name: "Help Center Profile", href: "./pages/help-center-profile-member.html"},
                            ]}
                        />
                        <MenuSubmenu
                            name = "Webinar"
                            description= " Webinar Landing Page Design"
                            list = {[
                                {id: 1, name: "Webinar List", href: "./pages/coach-webinar.html"},
                                {id: 2, name: "Webinar Single", href: "./pages/coach-webinar-single.html"},
                                {id: 3, name: "Webinar Booking", href: "./pages/coach-webinar-booking.html"},
                            ]}
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Download Book"
                            description= " Download the book for guide"
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Success Stories"
                            description= "See what our clients say & stories"
                        />
                        <MenuSubmenu_NoNextSubmenu
                            name = "Free Session Booking"
                            description= "Your 60-minute Free Coaching Session"
                        />
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <span className="nav-link" href="#" id="menu-5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="menu-5">
                    <ListLinksSubmenu
                            name ="Sign In"
                            list ={[
                                {id: 1, name: "Side Cover", href: "./pages/signin-cover.html"},
                                {id: 2, name: " Basic", href: "./pages/signin.html"}
                            ]}
                        />
                        <ListLinksSubmenu
                            name ="Sign Up"
                            list ={[
                                {id: 1, name: "Side Cover", href: "./pages/signup-cover.html"},
                                {id: 2, name: " Basic", href: "./pages/signup.html"}
                            ]}
                        />
                        <ListLinks
                            name = "Verify Code"
                            href= "./pages/verify-code.html"
                        />
                        <ListLinksSubmenu
                            name ="Password Reset"
                            list ={[
                                {id: 1, name: "Side Cover", href: "./pages/password-reset-cover.html"},
                                {id: 2, name: " Basic", href: "./pages/password-reset.html"}
                            ]}
                        />
                        <ListLinksSubmenu
                            name ="Setting"
                            list ={[
                                {id: 1, name: "Profile", href: "./pages/dashboard-profile.html"},
                                {id: 2, name: "Subscription", href: "./pages//dashboard-subscription.html"},
                                {id: 3, name: "Security", href: "./pages/dashboard-security.html"},
                                {id: 4, name: "Notifications", href: "./pages/dashboard-notifications.html"},
                                {id: 5, name: "Users", href: "./pages/dashboard-user.html"},
                                {id: 6, name: "Payment Plan", href: "./pages/dashboard-payment-plan.html"},
                                {id: 7, name: "Payment History", href: "./pages/dashboard-payment-history.html"}
                            ]}
                        />
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <span className="nav-link" href="#">
                        Shop
                    </span>
                    <ul className="dropdown-menu">
                        <ListLinks
                            name = "Product"
                            href= "./pages/shop.html"
                        />
                        <ListLinks
                            name = "Product Single"
                            href = "./pages/shop-single.html"
                        />
                        <ListLinks
                            name = "Cart"
                            href = "./pages/shop-cart.html"
                        />
                        <ListLinks
                            name = " Checkout"
                            href = "./pages/shop-checkout.html"
                        />
                        <ListLinks
                            name = "Empty Cart"
                            href ="./pages/shop-empty-cart.html"
                        />
                        <ListLinks
                            name = "Order Completed"
                            href ="./pages/shop-order-completed.html"
                        />
                    </ul>
                </li>
                <li className="nav-item">
                    <span className="nav-link " href="#">
                        Docs
                    </span>
                    <ul className="dropdown-menu left">
                        <SubmenuImage_noNextSubmenu
                            icon={icon}
                            title = "Documentation"
                            description= "Customizing and Create"
                        />
                        <SubmenuImage_noNextSubmenu
                            icon={icon}
                            title = "Components"
                            description= "Ready to use list of components"
                        />
                        <SubmenuImage_noNextSubmenu
                            icon={icon}
                            title = "Changelog"
                            description= "All notable changes in track"
                        />
                        <SubmenuImage_noNextSubmenu
                            icon={icon}
                            title = "RTL Demo"
                            description= "RTL Pages"
                        />                                    
                    </ul>
                </li>
            </ul>
            <div className="header-btn">
                <a href="https://bit.ly/38DGpi8 " className="btn btn-primary btn-sm ">Buy Now</a>
            </div>
        </div>
    )
}
export { NavbarCollapse };