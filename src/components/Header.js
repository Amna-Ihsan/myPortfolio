import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <nav id="navbar">
        <a href="#About">About</a>
        <a href="#projects">Work</a>
        <a href="#Contact">Contact</a>
      </nav>
    )
  }
}

export default Header