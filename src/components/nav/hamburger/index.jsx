import './index.css';

const Hamburger = () => {
    return (
        <div className='hamburger-container'>
            <div className="hamburger">
                <div className="hamburger-stripe stripe-1"></div>
                <div className="hamburger-stripe stripe-2"></div>
                <div className="hamburger-stripe stripe-3"></div>
            </div>
        </div>
    )
}

export { Hamburger }