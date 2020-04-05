import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'
import Sliders from './components/Sliders';
import Content from './components/Content';
import Footer from './components/Footer';


const style = {
  "background-image": "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
  "width": "100%",
  "height":"100%"
}

function App() {
  return (
 <div style={style}>
 <Navbar />
 <h1>Best Place For Search Some Vacation Place</h1>
 <Sliders />
 
 <Content />
 <Footer />
 </div>
  );
}

export default App;
