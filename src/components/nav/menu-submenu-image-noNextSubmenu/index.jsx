/* eslint-disable react/prop-types */
const SubmenuImage_noNextSubmenu = ({icon, title, description}) => {
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
        </li>
    )
}

export { SubmenuImage_noNextSubmenu };