import { Logo } from './Logo';
import './index.css';
import logo from '../../assets/gitlab-wordmark.svg'

const Companies = () => {
    return (
        <div className="companies">
            <div className="companies-container">
                <div className='companies-title-container'>
                    <h3 >
                        The best companies know when they{"'"}re in good company.
                    </h3>
                </div>
                <div className="companies-logos-container">
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                    <Logo logo={logo}/>
                </div>
            </div>
        </div>
    )
}

export {Companies};