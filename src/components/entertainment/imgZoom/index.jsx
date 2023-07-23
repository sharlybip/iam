import './index.css';

const ImgZoom = ({img, caption}) => {
    return (
        <div className="entertainment-container-item">
                <div className="img-overlay">
                    <a href="#">
                        <img src={img} alt={caption}/>
                    </a>
                    <div className="caption">
                        <a href="pages/podcast.html" className="btn btn-outline-white btn-lg">{caption}</a>
                    </div>
                </div>
            </div>
    )
}
export { ImgZoom }