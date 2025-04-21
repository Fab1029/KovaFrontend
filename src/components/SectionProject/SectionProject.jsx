import React, { useState } from 'react';
import './SectionProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider.jsx'

const SectionProject = ({ project }) => {

    return (
        <div key={''} className='section-project'>
            <div className='section-project-header-container'>
                <SectionTitle title={project.title} subtitle={project.subTitle} />
                <video className='section-project-video' src={project.video} autoPlay loop muted />
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
            
            <div className='section-project-render-main-container'>
                <img className='section-project-render-main' src={project.render}/>
                <div>
                    <img className='section-project-render' src={project.renders[0]} alt='Render' />
                    <img className='section-project-render' src={project.renders[1]} alt='Render' />
                </div>
            </div>
            
            <div className='section-project-blueprint-main-container'>
                <div>
                    <img className='section-project-blueprint' src={project.blueprints[0]} alt='Render' />
                    <img className='section-project-blueprint' src={project.blueprints[1]} alt='Render' />
                </div>
                <img className='section-project-blueprint-main' src={project.blueprint}/>
            </div>
            {/*


            <ul className='section-project-renders-container'>
                {project.renders?.slice(2).map((render, index) => (
                    <li key={index}>
                        <img className='section-project-render' src={render} alt='Render' />
                    </li>
                ))}
            </ul>
            
            <img className='section-project-blueprint-main' src={project.blueprint} alt='Blueprint' />

            <ul className='section-project-blueprint-container'>
                {project.blueprints?.map((blueprint, index) => (
                    <li key={index}>
                        <img className='section-project-blueprint' src={blueprint} alt='Blueprint' />
                    </li>
                ))}
            </ul>
            */}
        </div>
    );
};

export default SectionProject;
