const API_URL = "http://localhost:8080";
//const API_URL = "http://192.168.1.4:8080";

export const getClients = async() => {
    try {
        const response = await fetch(`${API_URL}/client`);

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