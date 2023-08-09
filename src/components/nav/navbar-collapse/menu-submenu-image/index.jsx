/* eslint-disable react/prop-types */
import './index.css'

const SubmenuImage = ({icon, title, description, list}) => {
    const final = list.map(item => 
        <li key={item.id}>
            <a className="dropdown-item" href={`./pages/${title.toLowerCase()}-${(item.name).toLowerCase()}.html`}>
                {item.name}
            </a>
        </li>)
    return (
        <li className="dropdown-submenu">
            <a href="#">
                <div className="dropdown-submenu-container">
                    <div className="icon-shape">
                        <img src={icon}/>
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>
                            {description}.
                        </p>
                    </div>
                </div>
            </a>
            <ul className="dropdown-submenu-nextSubmenu">
                {final}
            </ul>
        </li>
    )
}

export { SubmenuImage };