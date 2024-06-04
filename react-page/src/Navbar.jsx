import React from "react"
import { useState } from 'react'
import ReactDOM from "react-dom"
import reactLogo from "./assets/react.svg"
import "./navbar.css"

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo_wrapper">
          <img className="img_logo" src={reactLogo} />
          <p className="logo_text">ReactFacts</p>
        </div>

        <div className="project_name">
          <p className="text_project_name">React Course - Project 1</p>
        </div>
      </div>
    </nav>
  )
}
