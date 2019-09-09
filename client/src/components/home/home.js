import React, { useState } from 'react';
import axios from 'axios';

import './home.css';

function Home (props) {
  const [pasteTitle, setPasteTitle] = useState(null);
  const [pasteText, setPasteText] = useState(null);
  const [pasteSyntax, setPasteSyntax] = useState(null);

  const handleSubmit = async () => {
    const data = await axios.post('/api/paste', {
      pasteTitle: pasteTitle === null ? 'Untitled' : pasteTitle,
      pasteText,
      pasteSyntax: pasteSyntax === null ? null : pasteSyntax.toLowerCase()
    })
    
    return props.history.push(`/p/${data.data.pasteID}`);
  }

  return (
    <div className="home">
      <div className="title">
        <h1>ypps</h1>
        <h3>your personal pasting space</h3>
      </div>
      <form onSubmit={evt => evt.preventDefault()}>
        <input placeholder="Paste Title" onChange={(evt) => {evt.preventDefault(); setPasteTitle(evt.target.value)}}></input>
        <textarea placeholder="Paste Text" onChange={(evt) => setPasteText(evt.target.value)}></textarea>
        <select onChange={(evt) => setPasteSyntax(evt.target.value)}>
          <option selected={true} disabled={true}>Syntax Highlighting</option>
          <option>JavaScript</option>
          <option>Java</option>
          <option>Python</option>
          <option>C</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option>PHP</option>
          <option>Rust</option>
          <option>Ruby</option>
          <option>CSS</option>
          <option>CMake</option>
          <option>Docker</option>
          <option>Dart</option>
          <option value="jsx">React JSX</option>
          <option value="tsx">React TSX</option>
          <option>SQL</option>
          <option>Git</option>
          <option>JSON</option>
          <option>Markdown</option>
          <option>YAML</option>
        </select>
        <button disabled={!pasteText} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Home;