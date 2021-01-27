import React from 'react';

const Slider = () => {
    return(
<div className="wrapper">
  <div className="slider">
  
  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  <a href="#slide-4">4</a>
  <a href="#slide-5">5</a>

  <div className="slides">
    <div id="slide-1">
    <img className="image-sliders" src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
    </div>
    <div id="slide-2">
    <img className="image-sliders" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
    </div>
    <div id="slide-3">
    <img className="image-sliders" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
    </div>
    <div id="slide-4">
    <img className="image-sliders" src="https://images.unsplash.com/photo-1597049176495-60ca7846c7ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"></img>
    </div>
    <div id="slide-5">
    <img className="image-sliders" src="https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
    </div>
  </div>
</div>
</div>
    )
}

export default Slider;