import React, { useEffect, useState } from 'react'
import './WhoWeAre.css'
import '../../utils/css/Animation.css'
import Nav from '../../components/Nav/Nav.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import SectionWhoWeAre from '../../components/SectionWhoWeAre/SectionWhoWeAre.jsx'
import SectionKnowUsAlong from '../../components/SectionKnowUsAlong/SectionKnowUsAlong.jsx'
import SectionOurWork from '../../components/SectionOurWork/SectionOurWork.jsx'
import { getInformationById } from '../../services/Information.js'

const WhoWeAre = () => {
  const id = 1;
  const [information, setInformation] = useState(null);
  
  useEffect(() => {
      const fetchInformation = async () => {
          const data = await getInformationById(id);
          setInformation(data);
      };
      fetchInformation();
  }, []);

  return (
    <>
      {information ?
        <div> 
          <header className='whoWeAre-header'>
            <SectionKnowUsAlong  navBar={<Nav/>} teamImage={information.teamImage} description={information.description}/>
          </header>
          <main className='whoWeAre-main'>
            <SectionWhoWeAre cards={information.values}/>
            <SectionOurWork workingImages={information.workingImages}/>
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