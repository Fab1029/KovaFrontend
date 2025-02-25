import React from 'react'
import './SectionKnowUsAlong.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionKnowUsAlong = () => {
    const team = [
        {name: 'Arq. Vanessa Torres', img: '/assets/memberImage.jpg', description: `Simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the  leap into electronic typesetting, remaining essentially unchanged.`},
        {name: 'Arq. Vanessa Torres', img: '/assets/memberImage.jpg', description: `Simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the  leap into electronic typesetting, remaining essentially unchanged.`}
    ]
  
    return (
    <div className='section-knowUsAlong'>
        <SectionTitle title={'Conócenos a'} subtitle={'Fondo'}/>
        <ul className='section-knowUsAlong-list'>
            {team.map((member, index) => (
                <li className='section-knowUsAlong-element' key={index}>
                    <div className='section-knowUsAlong-description-container'>
                        <p className='section-knowUsAlong-description-text'>
                            {member.description}
                        </p>
                        <div className='section-knowUsAlong-description-divider'></div>
                    </div>
                    <div className='section-knowUsAlong-image-container'>
                        <img src={member.img} />
                        <p className='section-knowUsAlong-image-name'> {member.name}</p>
                    </div>
                </li>
            ))}
    
        </ul>
    </div>
  )
}

export default SectionKnowUsAlong