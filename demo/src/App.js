import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import MoreDetails from './components/MoreDetails';
import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Favorite from './components/Favorite';





function App() {

  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Error />} />
        <Route path="/moreDetails" element={<MoreDetails />} />
      </Routes>
    </div>



  );
}

export default App;
