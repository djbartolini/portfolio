import React, { useRef, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  Animator, ScrollContainer, ScrollPage, batch,
  Fade, FadeIn, FadeOut, Move,
  MoveIn, MoveOut, Sticky, StickyIn,
  StickyOut, Zoom, ZoomIn, ZoomOut
} from "react-scroll-motion";
import './style.css'

import photo from '/assets/dan-picture.jpg';
import quizzical from '/assets/quizzical-demo.gif';
import weather from '/assets/weather-dashboard.png';
import sofaKing from '/assets/sofa-king.png';
import github from '/assets/github.png';
import linkedin from '/assets/linkedin.png';

import earth from '/assets/earth.png';
import sun from '/assets/sun.png';
import moon from '/assets/moon.png';

import js from '/assets/js.png';
import html5 from '/assets/html5.png';
import css3 from '/assets/css3.png';
import react from '/assets/react.png';
import bootstrap from '/assets/bootstrap.png';
import gimp from '/assets/gimp.png';
import figma from '/assets/figma.png';
import node from '/assets/node.png';
import express from '/assets/express.png';
import mysql from '/assets/mysql.png';
import mongodb from '/assets/mongodb.png';
import graphql from '/assets/graphql.png';
import api from '/assets/api.png';
import vscode from '/assets/vscode.png';
import githubSkill from '/assets/github-skill.png';
import heroku from '/assets/heroku.png';
import bash from '/assets/bash.png';
import sequelize from '/assets/sequelize.png';
import mongoose from '/assets/mongoose.png';




const Portfolio = () => {
  const ref = useRef();
  const topRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const bottomRef = useRef(null);

  const [skills, setSkills] = useState('');
  const [skillList, setSkillList] = useState('');

  const handleSkills = (e) => {
    const { target } = e;
    const img = target.getAttribute('name');

    const sun = document.getElementsByName('sun')[0];
    const earth = document.getElementsByName('earth')[0];
    const moon = document.getElementsByName('moon')[0];

    if (img === 'earth') {
      setSkillList('Front End:');
      setSkills([[js, 'JavaScript'], [html5, 'HTML5'], [css3, 'CSS3'], [react, 'React'], [bootstrap, 'Bootstrap'], [gimp, 'GIMP'], [figma, 'Figma']]);
      target.setAttribute('id', 'style-active-icon');
      sun.removeAttribute('id');
      moon.removeAttribute('id');
    }
    if (img === 'sun') {
      setSkillList('Back End:');
      setSkills([[node, 'Node.js'], [express, 'Express.js'], [mysql, 'MySQL'], [mongodb, 'MongoDB'], [graphql, 'GraphQL'], [api, 'REST API']]);
      target.setAttribute('id', 'style-active-icon');
      earth.removeAttribute('id');
      moon.removeAttribute('id');
    }
    if (img === 'moon') {
      setSkillList('Tools:');
      setSkills([[vscode, 'VSCode'], [githubSkill, 'GitHub'], [heroku, 'Heroku'], [bash, 'Bash'], [sequelize, 'Sequelize'], [mongoose, 'Mongoose']]);
      target.setAttribute('id', 'style-active-icon');
      earth.removeAttribute('id');
      sun.removeAttribute('id');
    }
  }


  return (
    <>
      <div ref={topRef} style={{ position: 'absolute', top: '0' }}></div>
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
                <div className="top-button-div">
                  <a onClick={() => projectRef.current.scrollIntoView()}>
                    <button type="button" className="style-top-button">
                      Projects
                    </button>
                  </a>
                  <a onClick={() => skillsRef.current.scrollIntoView({ block: 'start' })}>
                    <button type="button" className="style-top-button">
                      Skills
                    </button>
                  </a>
                  <a onClick={() => bottomRef.current.scrollIntoView()}>
                    <button type="button" className="style-top-button">
                      Links
                    </button>
                  </a>
                </div>
              </Animator>
            </div>
            <div>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                <img className="style-photo" src={photo} />
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div ref={projectRef}></div>
          <Animator animation={FadeIn()}>
            <div className="style-project-div">
              <h3>Let's Get Quizzical</h3>
              <a className="style-project-link" href="https://github.com/djbartolini/quizQL" target="_blank">
                <i className="fa-solid fa-code"></i>
                Code
              </a>
              <a className="style-project-link" href="https://young-fortress-52703.herokuapp.com/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye"></i>
                App
              </a>
            </div>
            <a href="https://young-fortress-52703.herokuapp.com/">
              <img src={quizzical} className="quizzical" alt="screenshot of Quizzical app" />
            </a>
            <p className="style-quizzical-p">A Quiz App all about JavaScript! Powered by GraphQL and Node.js, templated in React.</p>
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
                    <a className="style-project-link" href="https://github.com/djbartolini/sofa-king-cool" target="_blank">
                      <i className="fa-solid fa-code"></i>
                      Code
                    </a>
                    <a className="style-project-link" href="http://quiet-river-37193.herokuapp.com/" target="_blank">
                      <i className="fa-sharp fa-solid fa-eye"></i>
                      App
                    </a>
                  </span>
                </div>
                <a href="http://quiet-river-37193.herokuapp.com/" target="_blank">
                  <img className="style-project" src={sofaKing} alt="screenshot of Sofa Kings app" />
                </a>
                <p className="style-project-text">A RESTful furniture showcasing app that uses Cloudinary to upload custom furniture. Built using sequelize and Handlebars.js.</p>
              </Animator>
            </div>
            <div >
              <Animator animation={MoveIn(500, 0)}>
                <div className="style-small-div">
                  <h4>Weather Dashboard</h4>
                  <span>
                    <a className="style-project-link" href="https://github.com/djbartolini/weather-dashboard" target="_blank">
                      <i className="fa-solid fa-code"></i>
                      Code
                    </a>
                    <a className="style-project-link" href="https://djbartolini.github.io/weather-dashboard/" target="_blank">
                      <i className="fa-sharp fa-solid fa-eye"></i>
                      App
                    </a>
                  </span>
                </div>
                <a href="https://djbartolini.github.io/weather-dashboard/" target="_blank">
                  <img className="style-project" src={weather} alt="screenshot of Weather Dashboard app" />
                </a>
                <p className="style-project-text">A simple weather app that leverages API calls to OpenWeather to provide a forecast for any city.</p>
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div ref={skillsRef}></div>
          <div>
            <div className="style-skill-card">
              <div className="style-card-header">
                <span className="daniel">Skills:</span>
              </div>
              <br></br>
              <div className="style-seo">
                <p>Click one to see my skills!</p>
              </div>
              <div className="style-skills">
                <div className="style-skill-icons">
                  <img onClick={handleSkills} name="sun" className="style-skill-icon style-skill-sun" src={sun}></img>
                  <img onClick={handleSkills} name="earth" className="style-skill-icon style-skill-earth" src={earth}></img>
                  <img onClick={handleSkills} name="moon" className="style-skill-icon style-skill-moon" src={moon}></img>
                </div>
                <div className="style-skill-text">
                  <h5>{skillList}</h5>
                  <ul className="style-skill-list">
                    {skills
                      ? skills.map((skill) =>
                        <div key={skill[1]} className="style-skill-item">
                          <img style={{ height: "80px" }} src={skill[0]}></img>
                          <li key={skill[1]}>{skill[1]}</li>
                        </div>
                      )
                      : <li></li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div>
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
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(FadeIn(), Sticky())}>
            <div ref={bottomRef} style={{ position: 'absolute', bottom: '0' }}></div>
            <div className="style-bottom-div">
              <h5 className="style-bottom-h5">Thanks for checking out my work!</h5>
              <p className="style-bottom-p">I would be happy to work with you!</p>
              <p className="style-bottom-p2">Please use the <a style={{ color: "#fff" }} href="/contact">contact form</a> or message me directly for more information.</p>
              <div className="style-bottom-links">
                <NavLink to="/about">
                  <button className="style-bottom-button">About Me</button>
                </NavLink>
                <NavLink to="/contact">
                  <button className="style-bottom-button">Contact Me</button>
                </NavLink>
                <a onClick={() => topRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}>
                  <button className="style-bottom-button">Back to Top ??????</button>
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