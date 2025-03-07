import {Link, useMatch, useResolvedPath, useParams} from "react-router-dom"

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <CustomLink to="/bettingPage/Matthew">Matthew Parlays</CustomLink>
            <CustomLink to="/bettingPage/Brandon">Brandon Parlays</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}