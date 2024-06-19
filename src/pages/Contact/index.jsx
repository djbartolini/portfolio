import React, { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";
import './style.css'

import github from '/assets/github.png';
import linkedin from '/assets/linkedin.png';


export default function Contact() {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setErrorMessage('');

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();


    if (!subject || !name || !email || !message) {
      setErrorMessage('All fields required')
    }
    if (email && !validateEmail(email)) {
      setErrorMessage('Enter a valid email address');
      return;
    }

    const form = document.getElementById('form');
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    const json = JSON.stringify(formObject);
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          setErrorMessage('Sent!');
        } else {
          console.log(response);
          setErrorMessage('Something went wrong!');
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Something went wrong!');
      });

    setName('');
    setEmail('');
    setMessage('');
  }


  return (
    <div className="page container contact">
      <div className="row mb-3">
        <div className="col-12">
          <h2 style={{ textAlign: "center" }}>Contact</h2>
        </div>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-9">
          <p>Use the form below, or contact me directly:</p>
          <div className="mb-3">
            <a href="https://github.com/djbartolini">
              <img style={{ height: "100px" }} src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/daniel-bartolini-development/">
              <img style={{ height: "100px" }} src={linkedin}></img>
            </a>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" id="form">
            <input type="hidden" name="access_key" value="435dca67-14b8-4c52-8c14-5bfe8b24dd43"></input>
            <input type="hidden" name="subject" value="New Submission From Portfolio Form"></input>

            <div className="input-group mb-3">
              <span className="input-group-text border-dark" id="basic-addon1" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Subject</span>
              <input onChange={handleInputChange} name="subject" className="form-control border-dark" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border-dark" id="basic-addon1" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Name</span>
              <input onChange={handleInputChange} name="name" className="form-control border-dark" placeholder="First and Last Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border-dark" id="basic-addon2" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Email</span>
              <input onChange={handleInputChange} name="email" className="form-control border-dark" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text border-dark" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Message</span>
              <textarea onChange={handleInputChange} name="message" className="form-control border-dark" aria-label="With textarea"></textarea>
            </div>
            <button onClick={handleFormSubmit} onTouchStart={handleFormSubmit} type="submit" className="btn" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Submit</button>
          </form>
        </div>
      </div>
      {errorMessage && (
        <div className="row text-center">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );

}