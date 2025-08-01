import {client} from '../data/Client.js'

export const getClients = () => {
    try {
        const response = client;

        if(response.length === 0) {
            throw new Error('Could not load clients')
        }

        return response;
    }
    catch(error) {
        console.error("Error getClients:", error);
        return null;
    }
}