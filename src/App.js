import './App.css';

import React from 'react'

import { Route } from 'react-router-dom'

import Home from './component/Home/Home'

import ProjectDesign from './page/ProjectDesign/ProjectDesign';


function App() {
  return (
    <div>
      <Route path='/home' component={Home}/>
      <Route path='/projectdesign' component={ProjectDesign}></Route>
    </div>
  );
}

export default App;
