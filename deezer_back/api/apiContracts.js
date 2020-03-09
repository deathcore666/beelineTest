import * as DeezerController from '../controllers/DeezerController';
const router = require('express').Router();
// Auth
router.get('/', DeezerController.fetchSongs);

export default router;
