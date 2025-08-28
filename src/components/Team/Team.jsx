import React from 'react'
import './Team.css'
import NicolasLandyImage from '../../assets/Team/NicolasLandy.webp'
import PaulaCordovaImage from '../../assets/Team/PaulaCordova.webp'
import VanessaTorresImage from '../../assets/Team/VanessaTorres.webp'

const Team = () => {
  return (
    <div className='team-container'>
      
      <div data-aos='zoom-in' data-aos-delay="100" data-aos-duration="800">
          <h1 className='recent-project-title'>
              Nuestro
          </h1>
          <h1 className='recent-project-subtitle'>
              Equipo
          </h1>
      </div>

      <div className='team-profile-container'>
        <div data-aos = 'fade-down'>
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img src={NicolasLandyImage} alt='nicolas-landy' className='profile-image' loading='lazy'/>
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
              <img src={VanessaTorresImage} alt='vanessa-torres' className='profile-image' loading='lazy'/>
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


        {/*<div data-aos = 'fade-down'>
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img src={PaulaCordovaImage} alt='paula-cordova' className='profile-image' loading='lazy'/>
            </div>
            <div className='profile-container-name'>
              <h2 className='profile-name'>Paula</h2>
              <h2 className='profile-last-name'>Córdova</h2>
            </div>
            <p className='profile-description'>
              Arquitecta, CEO de Kova Arch y gestora de proyectos. Lidera con una visión integral, combinando creatividad, estrategia y sensibilidad por el entorno. Comprometida con la innovación, la sostenibilidad y el diseño de espacios con significado.
            </p>
          </div>
        </div>*/}

      </div>
      
    </div>
  )
}

export default Team