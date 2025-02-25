import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/WhoWeAre" element={<WhoWeAre/>}/>
        </Routes>

    </Router>
  )
}

export default AppRoutes