import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const sendRequest = async (url) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    }
    const { data } = await axios.get(url, {
        params: {
            lan: 'en',
        },
        headers: {
            'x-rapidapi-host': 'wikiapi.p.rapidapi.com',
            'x-rapidapi-key': token
        }
    });
    return data;
};

export { sendRequest};