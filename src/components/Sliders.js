import React from 'react'
import Slider from 'infinite-react-carousel';

function Sliders() {
  const Tocenter = {
  "height": "100vh;",
  "display": "flex",
  "justify-content": "center",
  "align-items": "center"
  }
    return (
        <div>
            <Slider dots>
            <div >
              <h1 style={Tocenter}> <img src={require('./images/banner1.jpg')} width="90%" height="500px"/> </h1>
          </div>
            <div>
            <h1 style={Tocenter}> <img src={require('./images/banner2.jpg')} width="90%" height="500px" /> </h1>
            </div>
            <div>
            <h1 style={Tocenter}> <img src={require('./images/banner3.jpg')} width="90%" height="500px" /> </h1>
            </div>
            <div>
            <h1 style={Tocenter}> <img src={require('./images/banner4.jpg')} width="90%" height="500px" /> </h1>
            </div>
          </Slider>
        </div>
    )
}

export default Sliders
