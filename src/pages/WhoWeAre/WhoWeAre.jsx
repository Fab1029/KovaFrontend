import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
import '../../utils/css/Animation.css'
import video1 from '../../assets/VideoPlayer/video1.webm'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx'
import Phrase from '../../components/Phrase/Phrase.jsx'
import Values from '../../components/Values/Values.jsx'
import Team from '../../components/Team/Team.jsx'
import PhotosGallery from '../../components/PhotosGallery/PhotosGallery.jsx'
import Loading from '../../components/Loading/Loading.jsx'



const WhoWeAre = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    
    <div style={{overflow: 'hidden'}}> 
    {loading ? <Loading/> : (
      <>
        <header className='whoWeAre-header'>
          <NavBar/>
        </header>
        <main className='whoWeAre-main'>
          <div className='whoWeAre-video-container'>
            <VideoPlayer video={video1} loopMode={true}/>
          </div>
          <Phrase/>
          <Values/>
          <Team/>
          <PhotosGallery/>
        </main>
        <footer className='whoWeAre-footer'>
          <Footer/>
        </footer>
      </>
    )}
    </div>
        
  )
}

export default WhoWeAre