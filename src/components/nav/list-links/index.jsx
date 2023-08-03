/* eslint-disable react/prop-types */
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