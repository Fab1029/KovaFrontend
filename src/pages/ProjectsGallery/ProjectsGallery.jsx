import React, { useEffect, useState } from 'react'
import './ProjectsGallery.css'
import '../../utils/css/Animation.css'
import NavBar from '../../components/NavBar/NavBar'

import Footer from '../../components/Footer/Footer'
import { getProjects } from '../../services/Project';

const ProjectsGallery = () => {
  const [projects, setProjects] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
        const data = await getProjects();
        setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <>
      {projects ?
        <div>
          <header className='projectsGallery-header'>
              <NavBar/>
          </header>
          <main className='projectsGallery-main'>

          </main>
          <footer className='projectsGallery-footer'>
              <Footer />
          </footer>
        </div>
        :
        <div>Cargando..</div>
      }
    </>
    
  )
}

export default ProjectsGallery