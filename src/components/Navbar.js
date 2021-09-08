import React from 'react'
import {Link} from 'react-scroll';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
  <nav className="navbar" style={{marginBottom: 0, position: 'fixed', width: '100%'}}>
      <Link smooth={true} to="home" offset={-50} className="navbar-brand" href="#" style={{fontSize: '2rem', position: 'relative', left: '10rem'}}>Gopal Yaduveer Khatri</Link>

        <ul className="navbar-nav ml-auto" style={{position: 'absolute', right: '10rem'}}>
          <li className="nav-item active">
            <Link smooth={true} to="home" offset={-50} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">About me</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="skills" offset={-50} className="nav-link" href="#">Skills</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-50} className="nav-link" href="#">portfolio</Link>
          </li>
        </ul>
  </nav>
  )
}

export default Navbar
