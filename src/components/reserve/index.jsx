import './index.css';
import { TitleDescription } from '../Title-description';

const Reserve = () => {
    return (
        <div className="reserve">
            <div className="img-container">
                
                    <img src="https://media.istockphoto.com/id/1458823471/es/foto/el-chico-positivo-est%C3%A1-de-pie-con-la-computadora-port%C3%A1til-en-las-manos-un-hombre-guapo-est%C3%A1-en.jpg?s=612x612&w=0&k=20&c=xWuN2SX0xfCQ8w_g7AJJZlE-EW7mXz9UQIP2sEz5KDg=" alt="gallery" className="img-fluid border-end border-white h-lg-100"/>
                

                
                    
                    <img src="https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=HdplZ6eKhw9R3Ww5vIDmTT433zTPFemZNBF99L57e88=" alt="gallery" className="micha"/>

                    <img src="https://media.istockphoto.com/id/1420697156/es/foto/liderazgo-gerente-y-l%C3%ADder-de-equipo.jpg?s=612x612&w=0&k=20&c=pcZGQfWwy28A9KFPIZygAm0LLCaFJ8E-mN76lYdfigI=" alt="gallery" className="micha"/>
                

                
                    
                    <img src="https://media.istockphoto.com/id/1434212178/es/foto/dama-del-medio-oriente-usando-computadora-port%C3%A1til-trabajando-en-l%C3%ADnea-sentada-en-la-oficina.jpg?s=612x612&w=0&k=20&c=pk_ReecOSHurTxKZHde9WkKbboga-8OyxJwzByyOHSY=" alt="gallery" className="micha"/>

                    <img src="https://media.istockphoto.com/id/1417064302/es/foto/mujer-joven-y-alegre-disfrutando-de-un-coche-nuevo-abrazando-el-volante-sentado-en-su-interior.jpg?s=612x612&w=0&k=20&c=HqHimUYSuWaiyNW9WJgimlM6ctC2IVTX4kmT-NbSXjY=" alt="gallery" className="micha"/>
                
                
                    <img src="https://media.istockphoto.com/id/1423295447/es/foto/foto-de-cuerpo-entero-de-una-joven-asi%C3%A1tica-en-el-fondo.jpg?s=612x612&w=0&k=20&c=CbKC_m6OZd402ulbRxYbNqEVO9SGc5G9zej6HcJSxmE=" alt="gallery" className="img-fluid border-start border-white h-lg-100"/>
                
            </div>
            <div className="reserve-container-form">
                <div className="container">
                   <TitleDescription
                        title= 'Book for Speaking or Workshops'
                        description='Call me at: 123-567-7890 or
                            Book online by fill below form.'
                        font={14}
                    />
                    <form>
                        <div className="input-container">
                            <input type="text" className="form-control " placeholder="Name" required="" spellCheck="false" data-ms-editor="true"/>
                        </div>
                        <div className="input-container">
                            <input type="email" className="form-control " placeholder="Email" required=""/>
                        </div>
                        <div className="input-container">
                            <select defaultChecked="Select Workshops" className="form-select  mb-3">
                                <option>
                                    Select Workshops
                                </option>
                                <option value="1">
                                    Business Coaching
                                </option>
                                <option value="2">
                                    Relationship
                                </option>
                                <option value="3">
                                    Lifecoaching
                                </option>
                            </select>
                        </div>
                            <div className="input-container">
                            <button type="submit" className="btn btn-primary ">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {Reserve}