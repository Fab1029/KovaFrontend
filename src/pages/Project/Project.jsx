import React, { useEffect, useState } from 'react'
import './Project.css'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { getProjectById } from '../../services/Project.js';
import Loading from '../../components/Loading/Loading.jsx'
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails.jsx'
import RenderSlider from '../../components/RenderSlider/RenderSlider.jsx'

const Project = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject =  () => {
        const data = getProjectById(id);
        setProject(data); 
    };

    fetchProject();
  }, [id]); 

  useEffect(() => {
    if (project) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000); 

      return () => clearTimeout(timeout);
    }
  }, [project]);

  return (
      <div className='project-page-container' style={{overflow: 'hidden'}}> 
        {loading ? <Loading/> : (
          <>
            <header className='project-header'>
              <NavBar/>
            </header>
            <main className='project-main'>
              <ProjectDetails project={project}/>
              
              {(project.renders.length > 0  || project.blueprints.length > 0) && (
                <RenderSlider project={project}/>
              )}
              
            </main>
            <footer className='project-footer'>
              <Footer/>
            </footer>
          </>
        )}
      </div>
  );
}

export default Project