import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import WhoWeAre from '../pages/WhoWeAre/WhoWeAre';
import ProjectsGallery from '../pages/ProjectsGallery/ProjectsGallery';
import Project from '../pages/Project/Project';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/WhoWeAre" element={<WhoWeAre/>}/>
          <Route path='/ProjectsGallery/:id' element={<Project/>}/>
          <Route path='/ProjectsGallery' element={<ProjectsGallery/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes