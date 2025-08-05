import React from 'react'
import './Team.css'
import NicolasLandyImage from '../../assets/Team/NicolasLandy.jpg'
import PaulaCordovaImage from '../../assets/Team/PaulaCordova.jpg'
import VanessaTorresImage from '../../assets/Team/VanessaTorres.jpg'

const Team = () => {
  return (
    <div className='team-container'>
      
      <div data-aos='zoom-in' data-aos-delay="100" data-aos-duration="800">
          <h1 className='recent-project-title'>
              Proyectos
          </h1>
          <h1 className='recent-project-subtitle'>
              Recientes
          </h1>
      </div>

      <div className='team-profile-container'>
        <div data-aos = 'fade-down'>
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img className='profile-image' src={NicolasLandyImage}/>
            </div>
            <div className='profile-container-name'>
              <h2 className='profile-name'>Nicolás</h2>
              <h2 className='profile-last-name'>Landy</h2>
            </div>
            <p className='profile-description'>
              Arquitecta, CEO de Kova Arch y gestora de proyectos. Lidera con una visión integral, combinando creatividad, estrategia y sensibilidad por el entorno. Comprometida con la innovación, la sostenibilidad y el diseño de espacios con significado.
            </p>
          </div>
        </div>
        
        <div data-aos = 'fade-up'>
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img className='profile-image' src={VanessaTorresImage}/>
            </div>
            <div className='profile-container-name'>
              <h2 className='profile-name'>Vanessa</h2>
              <h2 className='profile-last-name'>Torres</h2>
            </div>
            <p className='profile-description'>
              Arquitecta, CEO de Kova Arch y gestora de proyectos. Lidera con una visión integral, combinando creatividad, estrategia y sensibilidad por el entorno. Comprometida con la innovación, la sostenibilidad y el diseño de espacios con significado.
            </p>
          </div>
        </div>

        
        <div data-aos = 'fade-down'>
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img className='profile-image' src={PaulaCordovaImage}/>
            </div>
            <div className='profile-container-name'>
              <h2 className='profile-name'>Paula</h2>
              <h2 className='profile-last-name'>Córdova</h2>
            </div>
            <p className='profile-description'>
              Arquitecta, CEO de Kova Arch y gestora de proyectos. Lidera con una visión integral, combinando creatividad, estrategia y sensibilidad por el entorno. Comprometida con la innovación, la sostenibilidad y el diseño de espacios con significado.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Team