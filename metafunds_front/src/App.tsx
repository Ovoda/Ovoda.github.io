import React from 'react';
import './stylesheets/global.css';
import './stylesheets/text_input.css';
import './stylesheets/button.css';
import Navbar from './components/navbar/navbar';
import MobileNavbar from './components/navbar/secondaryNavbar';
import Background from './components/background';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <a href="#" className="button">Metadonate</a>
      <a href="#" className="button">Contact US</a>
      <input type="text" className="text_input" placeholder='email' />
      <h1>Title H1</h1>
      <h2>Title H2</h2>
      <h3>Title H3</h3>
      <h4>Title H4</h4>
      <h5>Title H5</h5>
      <h6>Title H6</h6>
      <p>This is some p tag text</p>
      <strong>This is some p tag strong text</strong>
    </div >
  );
}

export default App;
