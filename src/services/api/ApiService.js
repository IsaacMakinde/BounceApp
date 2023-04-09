import { handleRequest } from './ApiClient';
const apiUrl = "https://europe-west1-bouncechall-31e3f.cloudfunctions.net/api";


export async function getCountry(country) {
    return handleRequest('GET', `${apiUrl}/country/${country}`);
}
