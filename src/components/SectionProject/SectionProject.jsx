import React, { useState } from 'react'
import './SectionProject.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const SectionProject = ({projectId}) => {
    const project = {id: 1, title: 'Proyecto', subtitle: 'Nabon', description: `Is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also  the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets  containing Lorem Ipsum passages, and more recently with desktop  publishing software like Aldus PageMaker including versions of Lorem  Ipsum.`, mainRenderImage: '/assets/headerImage3.webp',
        blueprintMain: '/assets/blueprintMain.jpg', renderVideo: '/assets/renderVideoMain.mp4',

        details: [
            {title: 'Area de construccion', detail: '125 metros cuadrados'},
            {title: 'Area del terreno', detail: '300 metros cuadrados'},
            {title: 'Año de construccion', detail: '2017'},
            {title: 'Estilo arquitectonico', detail: 'Contemporaneo'},
            {title: 'Materiales principales', detail: 'Contemporaneo'}
        ],
        renders: [
            '/assets/render1.jpeg',
            '/assets/render2.jpeg',
            '/assets/render3.webp',
            '/assets/render4.jpg',
            '/assets/render4.webp',
            '/assets/render5.jpg',
        ],
        blueprints: [
            '/assets/blueprint1.webp',
            '/assets/blueprint2.jpg'
        ]
    }


    const [showVideo, setShowVideo] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    // Manejar el hover con temporizador
    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setShowVideo(true);
        }, 1500); // 3 segundos
        setHoverTimeout(timeout);
    };

    // Cancelar el temporizador y ocultar el video al salir
    const handleMouseLeave = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setShowVideo(false);
    };
  
    return (
        <div className='section-project'>
            <div className='section-project-header-container'>
                <SectionTitle title={project.title} subtitle={project.subtitle} />
                
                <div
                    className='section-project-header-render'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {showVideo ? (
                        <video className='section-project-render-main' src={project.renderVideo} autoPlay loop muted />
                    ) : (
                        <img className='section-project-render-main' src={project.mainRenderImage} />
                    )}
                </div>
            </div>
            

            <div className='section-project-info'>
                <div className='section-project-info-description'>
                    <p>{project.description}</p>
                </div>
                
                <div className='section-project-info-details'>
                    {project.details.map((detail, index) => (
                        <p className='section-project-info-detail'>
                            <span className='section-project-info-title' >{detail.title}:</span> {detail.detail}
                        </p>
                    ))}
                </div>
            </div>
            {/*Los renders del proyecto*/}
            
            <ul className='section-project-renders-container'>
                {project.renders.map((render,index) => (
                    <li><img className='section-project-render' src={render}/></li>
                ))}
            </ul>
            {/*Los planos del proyecto*/}
            <img className='section-project-blueprint-main' src={project.blueprintMain}/>
            <ul className='section-project-blueprint-container'>
                {project.blueprints.map((blueprint,index) => (
                    <li><img className='section-project-blueprint' src={blueprint}/></li>
                ))}
            </ul>
        </div>
    )
}

export default SectionProject