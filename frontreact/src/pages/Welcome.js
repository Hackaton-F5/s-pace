import React from "react";
import { Link } from "react-router-dom"; 
import '../css/welcome.css'

export default function Welcome() {
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const Welcome = document.querySelector('.Welcome')

  left.addEventListener('mouseenter', () => Welcome.classList.add('hover-left'))
  left.addEventListener('mouseleave', () => Welcome.classList.remove('hover-left'))

  right.addEventListener('mouseenter', () => Welcome.classList.add('hover-right'))
  right.addEventListener('mouseleave', () => Welcome.classList.remove('hover-right')) 
  return (
      <div className="Welcome">
        <h1 className="title">S'paces For Coders Like You</h1>
            
            <div className="split left">
               <h1 className="text">Are you looking<br/> for a space? </h1> 
              <a href="./Landing.js" className="btn">Find your Space</a>
            </div>
            <div className="split right">
              <h1 className="text">Do you want to <br/>publish your space?</h1>
              <a href="./Display.js" className="btn">Publish your Space</a>
            </div>
    
      </div>
  )
}
