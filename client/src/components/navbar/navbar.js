import React from 'react';
import { Link } from "react-router-dom";
import { MdAdd, MdMenu } from 'react-icons/md';
import "./navbar.css";

function Navbar () {
  return (
    <div className="navbar">
      <ul className="links">
        <li className="brand">ypps</li>
        <li className="newPaste"><Link to="/"><MdAdd /> <span>paste</span></Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;