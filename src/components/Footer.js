import React from 'react';
import {Link} from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>NIT Hamirpur, India</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">+917018509684</a>
            </div>
            <div className="d-flex">
              <p>yaduveerskhatri20@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="skills" className="footer-nav">Skills</Link>
                <br />
              </div>

              <div className="col">
                <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 colo-sm-6 align-items-center">
            <p className="pt-3 text-center">
              &copy;
              {new Date().getFullYear()}&nbsp; Gopal Yaduveer Khatri
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
