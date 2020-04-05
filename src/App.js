import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'
import Sliders from './components/Sliders';
import Content from './components/Content';


const style = {
  // "background-image": "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  "width": "100%",
  "height":"100%"
}

function App() {
  return (
 <div style={style}>
 <Navbar />
 <Sliders />
 <br />
 <Content />
 </div>
  );
}

export default App;
