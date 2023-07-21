import './index.css'

// eslint-disable-next-line react/prop-types
const TitleDescription = ({title, description, font}) => {
    return (
        <div className="title-desc">
            <div className="title">
                <h2>
                    {title}
                </h2>
                <p style={{fontSize: font}}>
                    {description}
                </p>
            </div>
        </div>
)
}
export {TitleDescription}