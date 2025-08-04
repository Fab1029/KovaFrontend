import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';
import ProjectsGallery from '../pages/ProjectsGallery/ProjectsGallery';
import Project from '../pages/Project/Project';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ProjectsGallery' element={<ProjectsGallery/>}/>
            {/*<Route path="/WhoWeAre" element={<WhoWeAre/>}/>
            <Route path='/ProjectsGallery' element={<ProjectsGallery/>} />
            <Route path='/ProjectsGallery/:id' element={<Project/>} />*/}
        </Routes>
    </Router>
  )
}

export default AppRoutes