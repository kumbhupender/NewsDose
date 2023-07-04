import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


//Here in this project I use Class based component
//And this app is for Showing daily news Via API Call
//Here , I use the NewsDino.com for name my app
export default class App extends Component {

  

  render() {
    return (
      <div>
        <Navbar />

        <News />
      </div>
    )
  }
}

//git add .
//git commit -m "Initial commit"
//git push origin main
