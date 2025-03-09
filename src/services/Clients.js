const API_URL = "http://localhost:8080/client";

export const getClients = async() => {
    try {
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error('Could not load clients')
        }

        return await response.json();
    }
    catch(error) {
        console.error("Error getClients:", error);
        return null;
    }
}