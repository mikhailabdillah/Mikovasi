import React from 'react';

import logo from "../../assets/img/logo192.png";

function Footer() {
  return (
    <foooter>
      <div className="page-footer">
        <div className="container">
          <div className="row justify-content-center">
            <CompanyInfo logo={logo} desc="Lorem ipsum dolor sit ammet" />
            <MenuLink />
            <Copyright />
          </div>
        </div>
      </div>
    </foooter>
  );
}

function CompanyInfo(props) {
  return (
    <div className="col-lg-5 mb-3 pr-lg-5">
      <h3>
        <img src={props.logo} alt="" width="50" height="50" />
      </h3>
      <p>{props.desc}</p>
    </div>
  );
}

function MenuLink() {
  return (
    <div className="col-lg-7 mb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 mb-3">
          <h5 className="mb-3">Company</h5>
          <ul class="footer-link">
            <li>
              <a href="#0">Product</a>
            </li>
            <li>
              <a href="#0">Careers</a>
            </li>
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#0">Blog</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <h5 className="mb-3">Help Center</h5>
          <ul class="footer-link">
            <li>
              <a href="#0">Privacy & Policy</a>
            </li>
            <li>
              <a href="#0">Sitemap</a>
            </li>
            <li>
              <a href="#0">Press</a>
            </li>
            <li>
              <a href="#0">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <h5 className="mb-3">Social Links</h5>
          <ul class="footer-link">
            <li>
              <a href="#0">Facebook</a>
            </li>
            <li>
              <a href="#0">Twitter</a>
            </li>
            <li>
              <a href="#0">YouTube</a>
            </li>
            <li>
              <a href="#0">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Copyright() {
  return (
    <div className="col-12 text-center">
      <p>Copyright &copy; {new Date().getFullYear()} <a href="#0">MACode ID</a>. All rights reserved</p>
    </div>
  );
}

export default Footer;