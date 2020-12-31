import React from 'react';

import logo from "../../assets/img/home-banner.png";

function Header() {
  return (
    <header>
      <Navbar size="lg" themes="light" color="light" brandName="SaasIn" />
      <Banner></Banner>
    </header>
  );
}

function Banner() {
  return (
    <div className="page-banner home-banner">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-6 pt-5">
            <h1>Make Unexpected Content your New Fuel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Debitis ullam doloribus, amet ipsam beatae sequi totam.
              </p>
            <a href="#0" className="button is-theme">
              Get Started
              </a>
          </div>
          <div className="col-lg-6 py-5">
            <div className="img-place">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className={"navbar navbar-floating navbar-expand-" + props.size + " navbar-" + props.themes + " bg-" + props.color}>
      <div className="container">
        <a className="navbar-brand" href="#0">
          {props.brandName}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <MainMenu></MainMenu>
        </div>
      </div>
    </nav>
  )
}

function MainMenu() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#0">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#0">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#0">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#0">
          News
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#0">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#0">
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Header;