import React from 'react'
import './SectionOurFurniture.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import StyledLink from '../StyledLink/StyledLink'

const SectionOurFurniture = ({forniture}) => {
    
    return (
        <div className='section-our-furniture'>
            <SectionTitle title={'Nuestros'} subtitle={'Muebles'}/>
            <div className='section-our-furniture-container'>
                <div className='section-our-furniture-slider'><ProjectSlider navBar={''} projects={forniture} font_size={'60px'}/></div> 
                <div className='section-our-furniture-description'>
                    <p className='section-our-furniture-description-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    {/*<StyledLink prompt={'Cotizar'} color={'#5B8095'}/>*/}
                    <StyledLink prompt={'Ver más'} color={'#5B8095'}/>
                </div>
            </div>
            
        </div>
    )
}

export default SectionOurFurniture