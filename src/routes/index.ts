import { Router } from 'express';
import mercadoLivreRouter  from './mercadolivre.routes';

const routes = Router();

routes.use('/mercadolivre', mercadoLivreRouter);

export default routes;
