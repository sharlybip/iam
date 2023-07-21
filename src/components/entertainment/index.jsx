import './index.css'

const Entertainment = () => {
    return (
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
    )
}

export {Entertainment}