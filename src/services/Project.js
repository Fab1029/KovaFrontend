import {project} from '../data/Projetc.js';


export const getProjectById = async(id) => {
    try {
        const response = project.find(p => p.id === id);

        if(!response) {
            throw new Error('Could not load project')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProjectById:", error);
        return null;
    }
}

export const getProjects = () => {
    try {
        const response = project;
        
        
        if(response.length === 0) {
            throw new Error('Could not load projects')
        }

        return response;
    }
    catch(error) {
        console.error("Error getProjects:", error);
        return null;
    }
}