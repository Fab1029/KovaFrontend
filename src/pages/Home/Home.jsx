import React, { useEffect, useState } from 'react'
import './Home.css'
import '../../utils/css/Animation.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import {getProjects} from '../../services/Project.js'
import {getClients} from '../../services/Client.js'

import Loading from '../../components/Loading/Loading.jsx'

const Home = () => {
  const [clients, setClients] = useState(null);
  const [projects, setProjects] = useState(null);


  useEffect(() => {
    const fetchProjects = () => {
      const data = getProjects();
      setProjects(data); 
    };

    const fetchClients = () => {
      const data = getClients();
      setClients(data); 
    };

    
    fetchClients();
    fetchProjects();
    
    
  }, []); 

  return (
    <>
      {/*clients && forniture && information &&*/ projects ?
        <div> 
          <header className='home-header-container'>
            <ProjectSlider navBar={<NavBar/>} projects={projects} header={'header'}/> 
          </header>
          <main className='home-main'>
            {/*<SectionBreafDescription information={information}/>
            <SectionOurProjects projects={projects}/>
            <SectionOurFurniture forniture={forniture}/>
            <SectionOurClients clients={clients}/>*/}
          </main>
          <footer className='home-footer'>
            <Footer/>
          </footer>
        </div>
        :
        <Loading />
      }
    </>
    
  )
}

export default Home