import React from 'react';
import logo from './logo.svg';
import './App.css';
import screen from './test-screen.png';

import ReactImageAnnotate from "react-image-annotate";
 

const clsList = [
  "avatar",
  "blue-score",
  "red-score"  
]

const regionsList = [
  {
    id: "test box",
    tags: ["text"],
    color: "hsl(141,100%,50%)",
    cls: "red-score",
    type: "box",
    x: 0.01,
    y: 0.1,
    w: 0.1,
    h: 0.1
  },
  {
    id: "test box 2",
    tags: ["not-text"],
    color: "hsl(206,100%,50%)",
    cls: "blue-score",
    type: "box",
    x: 0.5,
    y: 0.1,
    w: 0.1,
    h: 0.1
  },
  {
    id: "test box 3",
    tags: ["text"],
    color: "hsl(60,100%,50%)",
    cls: "blue-score",
    type: "box",
    x: 0.34746219286297825,
    y: 0.12828947368421054,
    w: 0.014127423822714702,
    h: 0.029778393351800547
  }  
]

const imagesList = [
  {
    src: screen,
    name: "Image 1",
    regions: regionsList
  }
]

const onExit = (obj) => {
  const images = obj.images.map(image => {
    return image.regions;
  })
  console.log(JSON.stringify(images));
  return JSON.stringify(images)
}


const App = () => (
  <ReactImageAnnotate
    selectedImage={screen}
    taskDescription="# Tag coffees."
    enabledTools={["select", "create-box"]}
    images={imagesList}
    regionTagList={["text", "not-text"]}
    regionClsList={clsList}
    onExit={onExit}
  />
)

export default App;
