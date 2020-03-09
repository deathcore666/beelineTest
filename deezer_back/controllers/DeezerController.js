import * as DeezerService from '../services/DeezerService';

import { sendErrorToClient } from '../middlewares/errorHandling';
import url from "url";

export const fetchSongs = async (req, res, next) => {
    try {
        const url_parts = url.parse(req.url, true);
        const artistName = url_parts.query.q;
        const data = await DeezerService.fetchSongs(artistName);
        return res.status(200).json({ ...data });
    } catch (error) {
        return sendErrorToClient(error, res);
    }
};
