import React, { useEffect, useState } from 'react'
import './Home.css'
import '../../utils/css/Animation.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import SectionBreafDescription from '../../components/SectionBreafDescription/SectionBreafDescription.jsx'
import SectionOurProjects from '../../components/SectionOurProjects/SectionOurProjects.jsx'
import SectionOurFurniture from '../../components/SectionOurFurniture/SectionOurFurniture.jsx'
import SectionOurClients from '../../components/SectionOurClients/SectionOurClients.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import {getProjects} from '../../services/Project.js'
import {getClients} from '../../services/Clients.js'
import {getInformationById} from '../../services/Information.js'
import {getForniture} from '../../services/Forniture.js'
import Loading from '../../components/Loading/Loading.jsx'

const Home = () => {
  const [clients, setClients] = useState(null);
  const [projects, setProjects] = useState(null);
  const [forniture, setForniture] = useState(null);
  const [information , setInformation] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data); 
    };

    const fetchClients = async () => {
      const data = await getClients();
      setClients(data); 
    };

    const fetchInformation = async () => {
      const data = await getInformationById(1);
      setInformation(data); 
    };

    const fetchForniture = async () => {
      const data = await getForniture();
      setForniture(data); 
    };

    fetchClients();
    fetchForniture();
    fetchInformation();
    fetchProjects();
    
    
  }, []); 

  return (
    <>
      {clients && forniture && information && projects ?
        <div> 
          <header className='home-header'>
            <ProjectSlider navBar={<Nav/>} projects={projects} header={'header'}/> 
          </header>
          <main className='home-main'>
            <SectionBreafDescription information={information}/>
            <SectionOurProjects projects={projects}/>
            <SectionOurFurniture forniture={forniture}/>
            <SectionOurClients clients={clients}/>
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