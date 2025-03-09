import React, { useState } from 'react';
import './SectionProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const SectionProject = ({ project }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    // Manejar el hover con temporizador
    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setShowVideo(true);
        }, 3000);
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
                <SectionTitle title={project.title} subtitle={project.subTitle} />
                <div
                    className='section-project-header-render'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {showVideo ? (
                        <div className='section-project-render-main'>
                            <video className='section-project-video' src={project.video} autoPlay loop muted />
                        </div>
                    ) : (
                        <div className='section-project-render-main'>
                            <img className='section-project-render-main' src={project.render} alt='Render' />
                        </div>

                    )}
                </div>
            </div>

            <div className='section-project-info'>
                <div className='section-project-info-description'>
                    <p>{project.description}</p>
                </div>

                <div className='section-project-info-details'>
                    {project.details?.map((detail, index) => (
                        <p key={index} className='section-project-info-detail'>
                            <span className='section-project-info-title'>{detail.title}:</span> {detail.detail}
                        </p>
                    ))}
                </div>
            </div>

            {/*Los renders del proyecto*/}
            <ul className='section-project-renders-container'>
                {project.renders?.map((render, index) => (
                    <li key={index}>
                        <img className='section-project-render' src={render} alt='Render' />
                    </li>
                ))}
            </ul>

            {/*Los planos del proyecto*/}
            <img className='section-project-blueprint-main' src={project.blueprint} alt='Blueprint' />
            <ul className='section-project-blueprint-container'>
                {project.blueprints?.map((blueprint, index) => (
                    <li key={index}>
                        <img className='section-project-blueprint' src={blueprint} alt='Blueprint' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SectionProject;
