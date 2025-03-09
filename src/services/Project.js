const API_URL = "http://localhost:8080/project";

export const getProjectById = async(id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if(!response.ok) {
            throw new Error('Could not load project')
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error getProjectById:", error);
        return null;
    }
}

export const getProjects = async() => {
    try {
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error('Could not load projects')
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error getProjects:", error);
        return null;
    }
}