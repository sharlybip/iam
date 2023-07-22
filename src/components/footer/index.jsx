import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container-in">
                    <div className="father-list">
                        <div className="mb-4">
                            <h4 className="mb-4 text-white">About</h4>
                            <ul className="list-unstyled list-group">
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Meet Coach</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Press</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Social Feed</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link"> Help</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="father-list">
                        <div className="mb-4">
                            <h4 className="mb-4 text-white ">Blog</h4>
                            <ul className="list-unstyled list-group ">
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Business Coaching</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Relationship</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Leadership</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Life Coaching</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Time Management</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="father-list">
                        <div className="mb-4">
                            <h4 className="mb-4 text-white ">Resources</h4>
                            <ul className="list-unstyled list-group ">
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Online Courses</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link"> Books Meditation</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link"> Podcast</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Albums</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Download App</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="father-list">
                        <div className="mb-4">
                            <h4 className="mb-4 text-white ">Follow Me</h4>
                            <ul className="list-unstyled list-group">
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Instagram</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link"> Facebook</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link"> LinkedIn</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">YouTube</a></li>
                                <li className="list-group-item"><a href="#" className="list-group-item-link">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="father-list">
                        <div className="suscribe">
                            <h4 className="mb-4 text-white">Subscribe to our newsletter</h4>
                            <div>
                                <p>Subscribe to get notified daily new motivational &amp; inspiration tips.</p>
                                <form>
                                    <div className="mb-3">
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