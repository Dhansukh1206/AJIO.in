import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  let my_header = {
    borderBottom: "3px solid #f0eded"
  }
  let myBtn ={
  }
  let myOpt = {
    color: "#e5e5e5"
  }
  let my_logo = {
    fontSize: "40px",
    margin: "0px 20px",
    color: "#e5e5e5"
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={my_header}>
      <div className="container-fluid"> 
        <Link className="navbar-brand" to="/"><b style={my_logo}>
          {props.title}</b>
        </Link>
        
        <button
        /* It's mobile web button*/
         className="navbar-toggler"
         style={myBtn}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={myOpt} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={myOpt} to="/about">About</Link>
            </li>
          </ul>
          { props.searchBar? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>: ""}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}