import { useState } from "react"
import React from "react"
import "./Content.css"
import react_image from "./assets/react_half.png"


function Content() {
  return (
    <div className="content">
      <h1 className="header">Fun facts about React</h1>

      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

      <img src={react_image} alt="" className="react_half"/>
    </div>
  )
}

export default Content
