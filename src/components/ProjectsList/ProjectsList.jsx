import React, { useEffect, useState } from 'react'
import './ProjectsList.css'
import {getProjects} from '../../services/Project.js'

const ProjectsList = ({typeProjects}) => {
    const [projects, setProjects] = useState(null);


    useEffect(() => {
        const fetchProjects = () => {
            const data = getProjects();
            const dataFiltered = data.filter((project) => project.type === typeProjects);
            console.log(dataFiltered);
            setProjects(dataFiltered); 
        };

        fetchProjects();

    }, [typeProjects]); 

  return (
    <div className='project-list-container' style={{overflow: 'hidden'}}>
        {projects && projects.map((project, index) => (
            <div key={index} className="project-card-container" onClick={null}>
                <img
                    src={project.render}
                    alt={project.title}
                    className="project-image"
                />
                <div className='project-card-blur-container'>
                    <div>
                        <h2 className='project-card-blur-title'>{project.title.split(' ')[0]}</h2>
                        <h2 className='project-card-blur-subtitle'>{project.title.split(' ')[1]}</h2>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProjectsList