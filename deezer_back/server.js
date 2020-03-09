import bodyparser from 'body-parser';
import config from './config';
import cors from 'cors';
import deezerRoute from './api/apiContracts';
import express from 'express';
import helmet from 'helmet';
import logger from './helpers/logger';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/', deezerRoute);
app.set('port', process.env.PORT || config.port);
app.listen(app.get('port'), () => logger.info(`Server start at ${app.get('port')}`));
