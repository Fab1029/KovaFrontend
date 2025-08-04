import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
import '../../utils/css/Animation.css'
import video1 from '../../assets/VideoPlayer/video1.mp4'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx'
import Phrase from '../../components/Phrase/Phrase.jsx'
import Values from '../../components/Values/Values.jsx'



const WhoWeAre = () => {
  

  return (
    
    <div style={{overflow: 'hidden'}}> 
      <header className='whoWeAre-header'>
        <NavBar/>
      </header>
      <main className='whoWeAre-main'>
        <div className='whoWeAre-video-container'>
          <VideoPlayer video={video1} loopMode={true}/>
        </div>
        <Phrase/>
        <Values/>
      </main>
      <footer className='whoWeAre-footer'>
        <Footer/>
      </footer>
    </div>
        
  )
}

export default WhoWeAre