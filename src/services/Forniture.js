const API_URL = "http://localhost:8080";
//const API_URL = "http://192.168.1.4:8080";

export const getForniture = async() => {
    try {
        const response = await fetch(`${API_URL}/forniture`);

        if(!response.ok) {
            throw new Error('Could not load forniture')
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error getForniture:", error);
        return null;
    }
}