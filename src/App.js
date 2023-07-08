import './App.css';

import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

//Here in this project I use Class based component
//And this app is for Showing daily news Via API Call
//Here , I use the NewsDino.com for name my app
const App = () => {

  const pageSize = 15;

  const [progress , setProgress] = useState(0);


    return (
      <div>
      <Router>
        <Navbar />

        {/*  */}

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />

        <Routes>
        <Route exact path="/" element={ <News setProgress={setProgress} key="general" exact pageSize={pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" exact pageSize={pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" exact pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" exact pageSize={pageSize} country="in" category="health"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" exact pageSize={pageSize} country="in" category="sports"/>} />
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" exact pageSize={pageSize} country="in" category="science"/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology"exact pageSize={pageSize} country="in" category="technology"/>} />
      </Routes>

        

        </Router>
      </div>
    )
  }

  export default App;

//git add .
//git commit -m "Initial commit"
//git push origin main
