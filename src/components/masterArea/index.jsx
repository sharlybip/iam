import './index.css';
import { TitleDescription } from '../Title-description';

 const MasterArea = () => {
    return (
    <section className='masterArea'>
        <div className="masterArea-container container">
            <TitleDescription 
                title='Master Every Area of Your Life'
                description= 'Extreme Execution will help you leverage who you are in your life and career.'
                font= {20}
            />
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <a href="pages/program-single.html">
                            <img src="https://media.istockphoto.com/id/1501183741/es/foto/hermoso-caballo-marr%C3%B3n-corriendo-por-el-agua-en-la-playa-durante-una-puesta-de-sol-con.jpg?s=612x612&w=0&k=20&c=HyhBrs7y_hQxjoLbgefWExv1DyKDTVvxTbgFgF8vAJ0=" alt="thumb-img"/>
                        </a>
                    </div>
                    <div className="card-desc">
                        <div className="card-desc-body">
                            <h3 className=""> 
                                <a href="pages/program-single.html">
                                    Life Coaching
                                </a>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, conse cte turdisse in ornare lectussit amet lacinia nisi.
                            </p>
                            <a href="pages/program-single.html" className="btn-primary-link">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <a href="pages/program-single.html">
                            <img src="https://media.istockphoto.com/id/1490258028/es/foto/apret%C3%B3n-de-manos-y-acuerdo-exitosos-agente-de-bienes-ra%C3%ADces-y-cliente-celebrando-contratos.jpg?s=612x612&w=0&k=20&c=JYMTzJ1gawh9l6GadxQi7_srwQT41nZg98KLasZuGDk=" alt="thumb-img"/>
                        </a>
                    </div>
                    <div className="card-desc">
                        <div>
                        <h3> <a href="pages/program-single.html">
                            Relationship
                            </a>
                        </h3>
                        <p>
                            Maecenas eu est purus. Morbi luctus turpis justo, sit amet mollis arcu ultricies et.
                        </p>
                        <a href="pages/program-single.html" className="btn-primary-link ">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image ">
                        <a href="pages/program-single.html"><img src="https://media.istockphoto.com/id/1419608738/es/foto/gallo-rojo-joven-colombia.jpg?s=612x612&w=0&k=20&c=pO37OEjqXHUfZ_dEBmhWTYIxEoLNtq7BM2o1XeBfbWQ=" alt="thumb-img"/>
                        </a>
                    </div>
                    <div className="card-desc">
                        <div className="card-desc-body">
                            <h3> 
                                <a href="pages/program-single.html">
                                    Leadership
                                </a>
                            </h3>
                            <p>
                                Pellentesque at rhoncus metus, in condimentum felis. Donec congue augue placera.
                            </p>
                            <a  href="pages/program-single.html" className="btn-primary-link">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
 }

 export { MasterArea }