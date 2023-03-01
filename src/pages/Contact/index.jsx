import React, { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";
import './style.css'

import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setText(inputValue);
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !text) {
      setErrorMessage('All fields required')
    }
    if (email && !validateEmail(email)) {
      setErrorMessage('Enter a valid email address');
      return;
    }

    setName('');
    setEmail('');
    setText('');
  }

  return (
    <div className="page container">
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
          <select className="form-select mb-3" aria-label="Default select example">
            <option selected style={{ backgroundColor: "#242424ce", color: "#fff" }}>Reason:</option>
            <option value="1">Get a Quote</option>
            <option value="2">Leave a Testimonial</option>
            <option value="3">Make a Suggestion</option>
          </select>
          <div className="input-group mb-3">
            <span className="input-group-text border-dark" id="basic-addon1" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Name</span>
            <input onChange={handleInputChange} name="name" className="form-control border-dark" placeholder="First and Last Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text border-dark" id="basic-addon2" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Email</span>
            <input onChange={handleInputChange} name="email" className="form-control border-dark" placeholder="Email" aria-label="Username" aria-describedby="basic-addon2" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text border-dark" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Message</span>
            <textarea onChange={handleInputChange} name="text" className="form-control border-dark" aria-label="With textarea"></textarea>
          </div>
          <button onClick={handleFormSubmit} type="submit" className="btn" style={{ backgroundColor: "#242424ce", color: "#fff" }}>Submit</button>
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