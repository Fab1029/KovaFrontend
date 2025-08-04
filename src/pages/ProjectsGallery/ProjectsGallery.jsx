import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ProjectsGallery.css'
import '../../utils/css/Animation.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import OffersPicker from '../../components/OffersPicker/OffersPicker'

const ProjectsGallery = () => {
  const location = useLocation();
  const [typeProject, setTypeProject] = useState('Comercial');

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const type = params.get('type')
    if (type) {
      setTypeProject(type)
    }
  }, [location.search])

  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <header className='projectsGallery-header'>
          <NavBar />
        </header>
        <main className='projectsGallery-main'>
          <OffersPicker offer={typeProject} setOffer={setTypeProject} />
        </main>
        <footer className='projectsGallery-footer'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default ProjectsGallery
