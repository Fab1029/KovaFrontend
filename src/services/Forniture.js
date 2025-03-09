const API_URL = "http://localhost:8080/forniture";

export const getForniture = async() => {
    try {
        const response = await fetch(API_URL);

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