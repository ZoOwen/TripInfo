import React from 'react'
import '../App.scss'
export default function Navbar() {
    return (
        <div id="navigation-bar">
          <nav>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Contact</a></li>
              <a href="#" id="menu-icon"></a>
            </ul>
          </nav>
        </div>

    )
}
