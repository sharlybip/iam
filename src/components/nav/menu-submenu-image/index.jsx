/* eslint-disable react/prop-types */
const SubmenuImage = ({icon, title, description, list}) => {
    const final = list.map(item => 
        <li key={item.id}>
            <a className="dropdown-item" href={`./pages/${title.toLowerCase()}-${(item.name).toLowerCase()}.html`}>
                {item.name}
            </a>
        </li>)
    return (
        <li className="dropdown-submenu ">
            <a className="dropdown-list-group-item dropdown-toggle" href="#">
                <div className="d-flex align-items-center">
                    <div className="me-3 icon-shape icon-lg rounded-circle bg-light">
                        <img src={icon}/>
                    </div>
                    <div>
                        <h4 className="h5">{title}</h4>
                        <p className="text-muted mb-0 font-12">
                            {description}.
                        </p>
                    </div>
                </div>
            </a>
            <ul className="dropdown-menu-lg-end">
                {final}
            </ul>
        </li>
    )
}

export { SubmenuImage };