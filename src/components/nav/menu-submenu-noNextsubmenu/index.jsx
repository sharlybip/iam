/* eslint-disable react/prop-types */
const MenuSubmenu_NoNextSubmenu = ({name, description,newer}) => {
    return (
        <li className="dropdown-submenu">
            <a className="dropdown-submenu-item" href="#">
                <h4>{name}<span>{newer}</span></h4>
                <p>
                    {description}.
                </p>
            </a>
        </li>
    )
}

export { MenuSubmenu_NoNextSubmenu }