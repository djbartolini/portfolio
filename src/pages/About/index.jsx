import React from "react";
import './style.css'

import aboutPhoto from '/assets/photo.jpeg';
import github from '/assets/github.png';
import linkedin from '/assets/linkedin.png';

const About = () => {
  return (
    <div className="page about">
      <div className="style-hi">
        <span>Hi, I'm &nbsp;</span><span className="style-text-gradient-1">Daniel Bartolini.</span>
      </div>
      <div className="style-asheville">
        <span>I'm a &nbsp;</span>
        <span className="style-text-gradient-2">full stack developer &nbsp;</span>
        <span>from Asheville, NC</span>
      </div>
      <div className="style-main-text">
        <div className="style-about-text">
          <span>My home, Asheville, NC, is a local hub of creativity and craft. I grew up a musician and to this day I continue making funk music. Check out my music <a className="style-text-gradient-1 style-a" href="https://soundcloud.com/user-samo_the_third">here!</a> I am also a former emergency nurse, with 5 years of experience working on the frontlines, before and during the pandemic. I then decided to pivot my career and fully devote my time to more creative passions - design and programming - to create </span>
          <span className="style-text-gradient-1">immersive, innovative </span>
          <span>applications. My background in creative songwriting coupled with my critical thinking skills as an emergency healthcare provider has taught me a unique skillset that I apply to every ounce of code I develop.</span>
        </div>
        <div>
          <img className="style-about-photo" src={aboutPhoto}></img>
        </div>
      </div>
      <div className="style-main-bottom">
        <div className="style-about-bottom">
          <span>I have a passion for </span>
          <span className="style-text-gradient-1">innovative design </span>
          <span>and </span>
          <span className="style-text-gradient-2">optimization. </span>
          <span>I can take </span>
          <span className="style-text-gradient-2">your vision, </span>
          <span>and use it to create a website with </span>
          <span className="style-text-gradient-1">your brand, your features, </span>
          <span>and </span>
          <span className="style-text-gradient-1">your preferences. </span>
          <div className="style-lower-text"></div>
          <span>Website development is a creative process that involves endless options - my goal is to connect </span>
          <span className="style-text-gradient-2">your inspiration </span>
          <span>and </span>
          <span className="style-text-gradient-2">your brand </span>
          <span>to the possibilities of website development. </span>
          <span>I can give your website the power of programming's modern tools - </span>
          <span className="style-text-gradient-1">search engine optimization</span>
          <span> - </span>
          <span className="style-text-gradient-2">design customization</span>
          <span> - </span>
          <span className="style-text-gradient-1">and functional integration</span>
          <span> - so that your brand stands out.</span>
        </div>
      </div>
      <div>
        <a href="https://github.com/djbartolini">
          <img style={{ height: "100px" }} src={github}></img>
        </a>
        <a href="https://www.linkedin.com/in/daniel-bartolini-development/">
          <img style={{ height: "100px" }} src={linkedin}></img>
        </a>
      </div>
    </div>
  )
}

export default About;