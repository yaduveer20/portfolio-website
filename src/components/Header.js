import React from 'react'
import Particles from './particlesAnimation/Particles.js'
// import Typed from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper" >
      <Particles />

      <div className="main-info">
        {/* <Typed 
          className="typed-text"
          strings={[" ", "A Software Engineer", "Also known as an" ,"Front-end developer", "Back-end developer", "Full stack developer", "Or!", '"a coder"', " ", " "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        /> */}
      </div>
    </div>
  )
}

export default Header
