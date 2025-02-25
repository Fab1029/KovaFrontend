import React from 'react'
import './WhoWeAre.css'
import '../../utils/css/Animation.css'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import SectionWhoWeAre from '../../components/SectionWhoWeAre/SectionWhoWeAre.jsx'
import SectionKnowUsAlong from '../../components/SectionKnowUsAlong/SectionKnowUsAlong.jsx'
import SectionOurWork from '../../components/SectionOurWork/SectionOurWork.jsx'


const WhoWeAre = () => {
  return (
    <div> 
      <header className='whoWeAre-header'>
        <Nav/>
      </header>
      <main className='whoWeAre-main'>
        <SectionWhoWeAre />
        <SectionKnowUsAlong />
        <SectionOurWork/>
      </main>
      <footer className='whoWeAre-footer'>
        <Footer/>
      </footer>
        
    </div>
  )
}

export default WhoWeAre