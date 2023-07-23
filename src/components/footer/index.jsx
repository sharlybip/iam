import { List } from './Lista';
import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container-in">
                    <List 
                        title='About' 
                        list= {[
                            {id: 1,name: "Meet Coach"}, 
                            {id: 2,name: "Press"}, 
                            {id: 3,name: "Social Feed"}, 
                            {id: 4,name: "Help"},
                            {id: 5,name: "Contact Us"}
                        ]}/>
                    <List 
                        title='Blog' 
                        list= {[
                            {id: 1,name: "Business Coaching"}, 
                            {id: 2,name: "Relationship"}, 
                            {id: 3,name: "Leadership"}, 
                            {id: 4,name: "Life Coaching"},
                            {id: 5,name: "Time Management"}
                        ]}
                    />
                    <List 
                        title='Resources' 
                        list= {[
                            {id: 1,name: "Online Courses"}, 
                            {id: 2,name: "Books Meditation"}, 
                            {id: 3,name: "Podcast"}, 
                            {id: 4,name: "Albums"},
                            {id: 5,name: "Download App"}
                        ]}
                    />
                    <List 
                        title='Follow Me' 
                        list={[
                            {id: 1,name: "Facebook"}, 
                            {id: 2,name: "Instagram"}, 
                            {id: 3,name: "LinkedIn"}, 
                            {id: 4,name: "YouTube"},
                            {id: 5,name: "Twitter"}
                        ]}
                    />
                    <div className="father-list">
                        <div className="subscribe">
                            <h4>Subscribe to our newsletter</h4>
                            <div>
                                <p>Subscribe to get notified daily new motivational &amp; inspiration tips.</p>
                                <form>
                                    <div>
                                        <input type="email" className="form-control border-white" placeholder="Email Address" required=""/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export { Footer };