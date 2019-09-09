import React, { useState, useEffect } from 'react';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './layout.css';

function Layout (props) {
  return (
    <div>
      <Navbar />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;