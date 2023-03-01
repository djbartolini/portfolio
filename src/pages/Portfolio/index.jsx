import React, { useRef, useEffect } from "react";
import {
  Animator, ScrollContainer, ScrollPage, batch,
  Fade, FadeIn, FadeOut, Move,
  MoveIn, MoveOut, Sticky, StickyIn,
  StickyOut, Zoom, ZoomIn, ZoomOut
} from "react-scroll-motion";
import './style.css'

import photo from '../../assets/images/dan-picture.jpg';
import quizzical from '../../assets/images/quizzical-demo.gif';
import weather from '../../assets/images/weather-dashboard.png';
import sofaKing from '../../assets/images/sofa-king.png';
import thumbnail1 from '../../assets/images/headshot-digitized.png';
import thumbnail2 from '../../assets/images/IMG_8846.jpg';
import thumbnail3 from '../../assets/images/IMG_8847.jpg';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';


const Portfolio = () => {
  const ref = useRef();

  const onScroll = () => {
    const button = ref.current;
    button.style.opacity = '0';
  }

  useEffect(() => {
    const button = ref.current;
    if (button) {
      document.addEventListener("scroll", onScroll);
    }
  }, [onScroll]);


  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <div>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
                <div className="daniel-div">
                  <h2>Hi, I'm &nbsp;</h2><h2 className="daniel">Daniel Bartolini</h2>
                </div>
              </Animator>
              <Animator animation={batch(ZoomIn(), Sticky(), MoveOut(-1000, 0))}>
                <div className="top-p-div">
                  <p className="style-top-p">I'm a &nbsp;</p>
                  <p className="style-top-p web-dev">web developer &nbsp;</p>
                  <p className="style-top-p">from Asheville, NC</p>
                </div>
              </Animator>
            </div>
            <div>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                <img className="style-photo" src={photo} />
              </Animator>
            </div>
            <div>
              <a href="#projects">
                <button ref={ref} type="button" className="rounded-3 style-top-button">
                  Check out my work below ⬇️
                </button>
              </a>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="projects"></div>
          <Animator animation={batch(FadeIn(), StickyIn())}>
            <div className="style-project-div">
              <h3>Let's Get Quizzical</h3>
              <a className="style-project-link" href="https://github.com/kassrojas/quizQL">GitHub</a>
              <a className="style-project-link" href="https://young-fortress-52703.herokuapp.com/">Access the App</a>
            </div>
            <img src={quizzical} className="quizzical" />
            <p className="style-quizzical-p">A Quiz App that features quizzes on JavaScript, built in JavaScript. Powered by MongoDB and GraphQL, templated in React.</p>
            <p className="web-dev style-quizzical-tech">Technologies Used: &nbsp;</p>
            <p className="style-quizzical-list">React.js, MongoDB, GraphQL, Express.js, Node.js, Chart.js, Vanta.js</p>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div className="style-small-projects">
            <div>
              <Animator animation={MoveIn(-500, 0)}>
                <div className="style-small-div">
                  <h4>Sofa Kings</h4>
                  <span>
                    <a className="style-project-link" href="https://github.com/kassrojas/sofa-king-cool">GitHub</a>
                    <a className="style-project-link" href="http://quiet-river-37193.herokuapp.com/">App</a>
                  </span>
                </div>
                <img className="style-project" src={sofaKing} />
                <p className="style-project-text">A RESTful furniture showcasing app that uses Cloudinary to upload custom furniture. Built using sequelize and Handlebars.js.</p>
              </Animator>
            </div>
            <div >
              <Animator animation={MoveIn(500, 0)}>
                <div className="style-small-div">
                  <h4>Weather Dashboard</h4>
                  <span>
                    <a className="style-project-link" href="https://github.com/djbartolini/weather-dashboard">GitHub</a>
                    <a className="style-project-link" href="https://djbartolini.github.io/weather-dashboard/">App</a>
                  </span>
                </div>
                <img className="style-project" src={weather} />
                <p className="style-project-text">A simple weather app that leverages API calls to OpenWeather to provide a forecast for any city.</p>
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator>
          <div className="cards">
            <div className="style-card">
              <div className="style-card-header">
                <span>Your&nbsp;</span>
                <span className="web-dev">vision</span>
                <span>, my&nbsp;</span>
                <span className="daniel">keyboard.</span>
              </div>
              <br></br>
              <div className="style-seo">
                <span>Search Engine&nbsp;</span>
                <span className="daniel">Optimization: &nbsp;</span>
                <span>Increase your&nbsp;</span>
                <span className="web-dev">exposure.</span>
              </div>
              <br></br>
              <div className="style-seo">
                <span>Responsive, appealing UIs: Increase&nbsp;</span>
                <span className="web-dev">interactivity.</span>
              </div>
              <br></br>
              <div className="style-seo">
                <span className="daniel">Creative, modern&nbsp;</span>
                <span>designs:&nbsp;</span>
                <span>Increase&nbsp;</span>
                <span className="web-dev">engagement.</span>
              </div>
            </div>
          </div>
          </Animator>
          <Animator>
          <div>
            <div className="style-card">
              <p className="style-seo">My goals are your goals when designing and building your websites and web apps.</p>
              <br></br>
              <div className="style-seo">
                <span>My vision is to see your vision&nbsp;</span>
                <span className="daniel">come to life.</span>
              </div>
            </div>
          </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(FadeIn(), Sticky())}>
            <div style={{ transform: "translate(0, 12vh)", zIndex: "-1" }}>
              <h5 style={{ fontSize: "40px", marginBottom: "2rem" }}>Thanks for checking out my work!</h5>
              <p style={{ fontSize: "20px" }}>I would be happy to work with you!</p>
              <p style={{ marginBottom: "2rem", fontSize: "20px" }}>Please use the <a style={{ color: "#fff" }} href="/contact">contact form</a> or message me directly for more information.</p>
              <div style={{ margin: "1rem", display: "flex" }}>
                  <a href="/about">
                    <button className="style-bottom-button">About Me</button>
                  </a>
                  <a href="/about">
                    <button className="style-bottom-button">Contact Me</button>
                  </a>
                  <a href="/">
                    <button className="style-bottom-button">Back to Top ⬆️</button>
                  </a>
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
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  )
};

export default Portfolio;