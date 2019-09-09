import React, { useState, useEffect } from 'react';
import { FiHeart } from "react-icons/fi";

import './footer.css';

function Footer (props) {
  return (
    <div className="footer">
      Made with <span><FiHeart /></span> by <a href="https://carlosmenezes.com">Carlos Menezes</a>
    </div>
  );
}

export default Footer;