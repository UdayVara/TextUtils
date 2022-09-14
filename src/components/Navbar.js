import React from "react";
//this directory is important for PropTypes validation
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {

 
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.bgMode} bg-${props.bgMode}`}>
      <div className="container-fluid">
        {/* replace # with / in href  */}
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="">=</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >
                <span className={`text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                <span className={`text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>{props.about}</span>
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch my-md-0 mt-2 mb-3">
            <label className="form-check-label me-3" htmlFor="flexSwitchCheckDefault">
              <span className={`text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>Dark mode</span>
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleBgMode}
            />
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      
      </>
  );
}
// this means that only string data types are allowed
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

// default values if non values are provided in props

Navbar.defaultProps = {
  title: "Title missing",
  about: "abt",
};
