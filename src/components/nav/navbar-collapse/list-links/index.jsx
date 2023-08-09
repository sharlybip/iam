/* eslint-disable react/prop-types */
import './index.css'


const ListLinks = ({name, href}) => {
    return (
        <li>
            <a className="dropdown-item" href={href}>
                {name}
            </a>
        </li>
    )
}

export { ListLinks }