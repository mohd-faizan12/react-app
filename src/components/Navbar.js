import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-3 " htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enable DarkMode</label>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} type="submit">Search</button>
                    </form>

                </div>

            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

// If props value was undefined set default props value
// Navbar.defaultProps = { title: 'Set title here' }