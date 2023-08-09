/* eslint-disable react/prop-types */

import './index.css'

const ListLinksSubmenu = ({name, list}) => {
    const final = list.map(item => 
        <li key= {item.id}>
            <a className="dropdown-item" href={item.href}>
                {item.name} 
            </a>
        </li>
        )
    return (
        <li className="dropdown-submenu ">
            <a className="dropdown-item" href="#">
                {name}
            </a>
            <ul className=" dropdown-submenu-nextSubmenu">
                {final}
            </ul>
        </li>
    )
}

export { ListLinksSubmenu }