import logger from '../helpers/logger';
import axios from 'axios';

export const fetchSongs = async (artistName) => {
    const res = await axios.get(`https://api.deezer.com/search?q=${artistName}&order=RATING_DESC&limit=5&output=json`);
    logger.info(`https://api.deezer.com/search?q=${artistName}&order=RATING_DESC&limit=5&output=json`);
    return res.data;
};

