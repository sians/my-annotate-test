import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import screen from './test-screen.png';
import counterstrikeImg from './counterstrike.png';
import csgoTemplate from './csgo_template.json';

import { Provider } from 'react-redux';
import { store } from './store/redux';
import Panel from './components/Panel'

import ReactImageAnnotate from "react-image-annotate";

// console.log(counterstrikeImg)
// console.log(csgoTemplate)

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

const parseTemplate = (template) => {
  const regionList = template.map(box => {
    return {
      id: box["class_name"],
      tags: [""],
      color: "hsl(60,100%,50%)",
      cls: box["class_name"],
      type: "box",
      x: (box["start_x"] / 1200),
      y: (box["start_y"] / 900),
      w: ((box["end_x"] - box["start_x"]) / 1200),
      h: ((box["end_y"] - box["start_y"]) / 900),
    }
  })
  return regionList
}

const generateJson = (regions) => {
  const json = regions.map(region => {
    return {
      "class_name": region["id"],
      "start_x": Math.ceil(region["x"] * 1200),
      "end_x": Math.ceil((region["x"] + region["w"]) * 1200),
      "start_y": Math.ceil(region["y"] * 900),
      "end_y": Math.ceil((region["y"] + region["h"]) * 900)
    }
  })
  return json
}

const imagesList = [
  {
    src: counterstrikeImg,
    name: "Counterstrike",
    regions: parseTemplate(csgoTemplate)
  }
]

const onExit = (obj) => {
  const images = obj.images.map(image => {
    return generateJson(image.regions);
  })
  console.log(JSON.stringify(images));
  return JSON.stringify(images)
}


const App = () => (
    <ReactImageAnnotate
      selectedImage={counterstrikeImg}
      taskDescription="# Tag coffees."
      enabledTools={["select", "create-box"]}
      images={imagesList}
      regionTagList={["text", "not-text"]}
      regionClsList={clsList}
      onExit={onExit}
    />
)

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Panel />
//       </Provider>
//     )
//   }
// }

export default App;
