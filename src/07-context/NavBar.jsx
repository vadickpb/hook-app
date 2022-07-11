import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">UseContext</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                        About
                    </NavLink>

                    <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                        Login
                    </NavLink>





                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to ="/login">Login</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar