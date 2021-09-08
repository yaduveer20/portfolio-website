import React from 'react';
import developer from '../image/profile.jpg'

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row" style={{placeItems: 'center'}}>
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={developer} alt="developer"/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p style={{fontSize: '1.7rem'}}>
            I am computer science engineering graduate from National Institute of Technology, Hamirpur. During my engineering years, I honed my analytical thinking, problem solving and collaboration skills.
            Previously, I worked as a researcher alongside with mentor to develop Chaos Theory based hybrid deep learning models for bitcoin price prediction.
            I also worked an Industrial Trainee at Aptron Solutions Pvt Ltd, Gurgaon where I honed my Java, JavaScript and Web development skills. Recently I've worked on many self developed projects which allowed me to express my skills as a web developer.
            As I am a problem solver at heart, driven by growth mindset, I'm open to also work on problems other than engineering problems, that would help a company grow.
            With the high aspirations of self-actualization and making a huge impact on the world, I'm inclined towards working in a company's management and leadership roles as an important asset of that company.
            Ideally I would like to continue to specialize in software engineering, and as the opportunities present themselves I'm striving consistently with a vision of ascending into a Chief Technology Officer role within the next 10 years.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About
