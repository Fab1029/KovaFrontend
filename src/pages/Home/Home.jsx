import React, { useEffect, useState } from 'react'
import './Home.css'
import '../../utils/css/Animation.css'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import video1 from '../../assets/VideoPlayer/video1.mp4'
import {getProjects} from '../../services/Project.js'
import {getClients} from '../../services/Client.js'
import Loading from '../../components/Loading/Loading.jsx'
import Offers from '../../components/Offers/Offers.jsx'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx'
import RecentProjects from '../../components/RecentProjects/RecentProjects.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'

const Home = () => {
  const [clients, setClients] = useState(null);
  const [projects, setProjects] = useState(null);


  useEffect(() => {
    const fetchProjects = () => {
      const data = getProjects();
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      setProjects(shuffled.slice(0, 5)); 
    };

    const fetchClients = () => {
      const data = getClients();
      setClients(data); 
    };

    
    fetchClients();
    fetchProjects();
    
    
  }, []); 

  return (
    <div style={{ overflow: 'hidden' }}>
      {clients && projects ? (
        <>
          <header className="home-header-container">
            <ProjectSlider navBar={<NavBar />} projects={projects} header="header" />
          </header>

          <main className="home-main">
            <Offers />
            <div
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              className="home-video-container"
            >
              <VideoPlayer video={video1} />
            </div>

            <RecentProjects projects={projects} />

            <div
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              className="home-video-container"
            >
              <VideoPlayer video={video1} />
            </div>

            <Testimonials clients={clients} />
          </main>

          <footer className="home-footer">
            <Footer />
          </footer>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home