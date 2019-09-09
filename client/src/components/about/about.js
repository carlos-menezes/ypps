import React from 'react';

import './about.css';

function About(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <div class="info">
        <p><b>ypps</b> is a weekend-long project created by Carlos Menezes.</p>
        <p>It is not more than a clone of Hastebin (and, to some extent, Pastebin), as it's only use is pasting and sharing content anonymously with other people (with syntax highlighting for code).</p>

        <b>Please, do not post:</b>
        <ul>
          <li>email lists</li>
          <li>login details</li>
          <li>stolen source code</li>
          <li>hacked data</li>
          <li>copyrighted information / data</li>
          <li>password lists</li>
          <li>banking / creditcard / financial information / data</li>
          <li>personal information / data</li>
          <li>pornographic information / data</li>
          <li>spam links (this includes promoting your own site)</li>
        </ul>
        <p>If you want to get any information, please contact the creator @ <a href="mailto:talk@carlosmenezes.com">talk@carlosmenezes.com</a>.</p>
      </div>
    </div>
  );
}

export default About;