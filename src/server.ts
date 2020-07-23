import express from 'express';

import routes from './routes';
import logger from './config/logger';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  logger.info('Server Started on port 3333');
})
