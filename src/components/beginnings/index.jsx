import './index.css'
import { TitleDescription } from "../Title-description"

const Beginnings = () =>{
    return (
    <section className="beginnings">
        <div className="beginnings-container container">
            <div className="beginnings-title-description">
                <TitleDescription
                    title='A Boy Before Coach'
                    description='Before Coach became a media sensation for empowering people and
                    sharing Inspiration across the globe, he had his share of
                    obstacles to overcome.'
                    font= {20}
                />
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
    )
}

export {Beginnings}