import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Here in this project I use Class based component
//And this app is for Showing daily news Via API Call
//Here , I use the NewsDino.com for name my app
export default class App extends Component {

  pageSize = 15;
  

  render() {
    return (
      <div>
      <Router>
        <Navbar />
        {/* Fetch news with each category */}
        <Routes>
        <Route exact path="/" element={ <News key="general" exact pageSize={this.pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News key="business" exact pageSize={this.pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" exact pageSize={this.pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News key="health" exact pageSize={this.pageSize} country="in" category="health"/>} />
        <Route exact path="/sports" element={<News key="sports" exact pageSize={this.pageSize} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News key="science" exact pageSize={this.pageSize} country="in" category="science"/>} />
        <Route exact path="/technology" element={<News key="technology"exact pageSize={this.pageSize} country="in" category="technology"/>} />
      </Routes>

        

        </Router>
      </div>
    )
  }
}

//git add .
//git commit -m "Initial commit"
//git push origin main
