import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import './paste.css';

import Loader from '../loader/loader';

function Paste(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/${props.match.params.pasteID}`)
      .then((d) => {
        if(Object.keys(d.data).length > 0) {
          console.log('ecis')
          setData(d.data);
        }
      })

    setLoading(false);
  }, [])

  return (
    <div>
      <div className="paste">
      { loading && <Loader />}
      { data !== null ? 
        <div>
          <h1>{data.pasteTitle}</h1>
          <p>Created on <b>{new Date(data.createdAt).toLocaleDateString()}</b> &middot; Syntax: <b>{data.pasteSyntax}</b> &middot; Views: <b>{data.pasteViews}</b></p>
          <SyntaxHighlighter showLineNumbers customStyle={{ overflowY: 'auto', overflowX: 'auto', fontSize: 12 }} language={data.pasteSyntax}>{data.pasteText}</SyntaxHighlighter>
        </div>
        
        :

        <div style={{ textAlign: "center" }}>
          <h1>This paste doesn't exist.</h1>
          <Link to='/'>Go Back</Link>
        </div>
      }
      </div>
    </div>
  )
}

export default Paste;