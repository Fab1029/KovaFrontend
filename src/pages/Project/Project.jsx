import React, { useEffect, useState } from 'react'
import './Project.css'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { getProjectById } from '../../services/Project.js';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx'
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails.jsx'

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject =  () => {
        const data = getProjectById(id);
        setProject(data); 
    };

    fetchProject();
  }, [id]); 

  return (
    <>
      { project ?
        <div style={{overflow: 'hidden'}}> 
          <header className='project-header'>
            <NavBar/>
          </header>
          <main className='project-main'>
            <div className='render-video-container'>
              <VideoPlayer video={project.video} loopMode={true}/>
            </div>
            <ProjectDetails project={project}/>
          </main>
          <footer className='project-footer'>
            <Footer/>
          </footer>
        </div>
        :
        <div>Cargando..</div>
      }
    </>
      
  );
}

export default Project