import React, { useEffect, useState } from 'react'
import './Project.css'
import '../../utils/css/Animation.css'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { getProjectById } from '../../services/Project';

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // Cargar el proyecto cuando el componente se monta o `projectId` cambia
  useEffect(() => {
    const fetchProject = async () => {
        const data = await getProjectById(id);
        setProject(data); // Guardamos los datos en el estado
    };

    //fetchProject();
  }, [id]); // Se ejecuta cada vez que `projectId` cambie

  return (
    <>
      { project ?
        <div> 
          <header className='project-header'>
            <NavBar/>
          </header>
          <main className='project-main'>

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