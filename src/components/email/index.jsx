import './index.css'
import { TitleDescription } from '../Title-description'


const Email = ()=> {
    return (
        <section className='email'>
        <div className="email-container">
            <TitleDescription 
            title= 'Make following your passion your full time job' 
            description ="Learn How To Play A Different Game In Business With Your Own Rules"
            />
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
    </section>
    )
}
export {Email}