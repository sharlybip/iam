/* eslint-disable react/prop-types */
import './index.css';

const List = ({title, list}) => {
    const final = list.map((item) => <li key={item.id}><a href="#">{item.name}</a></li>);
    
    return (
        <div className="father-list">
            <div className="mb-4">
                <h4>{title}</h4>
                <ul>
                {final}
                </ul>
            </div>
        </div>
    )
}
export { List }