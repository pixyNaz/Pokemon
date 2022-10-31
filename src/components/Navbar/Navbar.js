import './Navbar.css'
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar () {
    return <nav className="nav">
        <ul>
            <CustomLink to="/">Все покемоны</CustomLink>
            <CustomLink to="/help">Помощь</CustomLink>
            <CustomLink to="/contact">Контакты</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}