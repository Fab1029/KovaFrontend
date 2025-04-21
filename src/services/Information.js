const API_URL = "http://localhost:8080";
//const API_URL = "http://192.168.1.4:8080";

export const getInformationById = async(id) => {
    try {
        const response = await fetch(`${API_URL}/information/${id}`);

        if(!response.ok) {
            throw new Error('Could not load info')
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error getInformationById:", error);
        return null;
    }
}

