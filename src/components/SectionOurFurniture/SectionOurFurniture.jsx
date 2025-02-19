import React from 'react'
import './SectionOurFurniture.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProjectSlider from '../ProjectSlider/ProjectSlider'
import Link from '../Link/Link'

const SectionOurFurniture = () => {
    const projects = [
        {title: '', subtitle: '', description: '', image: '/assets/furniture1.jpeg'},
        {title: '', subtitle: '', description: '', image: '/assets/furniture2.jpg'},
    ]
    
    return (
        <div className='section-our-furniture'>
            <SectionTitle title={'Nuestros'} subtitle={'Muebles'}/>
            <div className='section-our-furniture-container'>
                <div className='section-our-furniture-slider'><ProjectSlider navBar={''} projects={projects} font_size={'60px'}/></div> 
                <div className='section-our-furniture-description'>
                    <p className='section-our-furniture-description-text'>
                      A long established fact 
                      that a reader will be distracted by
                      hen loo The point of  using Lorem Ipsum is 
                      o usinere, aking it  look like readable English.
                    </p>
                    <Link prompt={'Cotizar'} color={'#5B8095'}/>
                </div>
            </div>
            <Link prompt={'Ver más'} color={'#5B8095'}/>
        </div>
    )
}

export default SectionOurFurniture