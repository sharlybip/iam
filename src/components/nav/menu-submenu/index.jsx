/* eslint-disable react/prop-types */
const MenuSubmenu = ({name, description, list}) => {
    
    const final = list.map(item => 
        <li key= {item.id}>
            <a className="dropdown-item" href={item.href}>
                {item.name}
            </a>
        </li>)
    return (
        <li className="dropdown-submenu">
            <a className="dropdown-submenu-item" href="#">
                <h4>{name}</h4>
                <p>
                    {description}.
                </p>
            </a>
            
            <ul className=" dropdown-submenu-nextSubmenu">
               {final}
            </ul>
        </li>
    )
}

export { MenuSubmenu }