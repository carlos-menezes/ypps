import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';

// Components
import Layout from './components/layout/layout';
import Home from './components/home/home';
import Paste from './components/paste/paste';
import About from './components/about/about';

function Comp(props) {
  return <h1>{props.name}</h1>;
}

function App(props) {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/p/:pasteID" component={Paste} />
        <Route exact path="/about" component={About} />
      </Layout>
    </Router>
  );
}

export default App;
