import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
import '../../utils/css/Animation.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'



const WhoWeAre = () => {
  

  return (
    <>
      {information ?
        <div> 
          <header className='whoWeAre-header'>

          </header>
          <main className='whoWeAre-main'>

          </main>
          <footer className='whoWeAre-footer'>
            <Footer/>
          </footer>
        </div>
        :
        <div>Cargando..</div>
      }
    </>
  )
}

export default WhoWeAre