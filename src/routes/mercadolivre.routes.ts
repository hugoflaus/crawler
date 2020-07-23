import  { Router } from 'express';
import logger from '../config/logger';
import MercadoLivre from '../models/MercadoLivre';
import MercadoLivreRepository from '../repositories/MercadoLivreRepository';

const mercadoLivreRouter = Router();

const mercardoLivreRepository = new MercadoLivreRepository();

  mercadoLivreRouter.post('/', async (request, response) =>{
  let mercadoLivre: MercadoLivre[] = [];
  const { search, limit } = request.body;

  if(!search || !limit){
    const errorLimit = limit == 0 ? "O limite deve ser maior que 0" : "";
    const message = `Envie todos parametros necessários.${errorLimit} `;
    logger.warning(message);
    return response.status(400).json({ message: message })
  }

  try{
    mercadoLivre = await mercardoLivreRepository.find(search, limit);
  }catch(error){
    logger.error("error.message");
    return response.status(400).json({ erro: error.message });
  }

  logger.info(JSON.stringify(mercadoLivre));
  return response.json(mercadoLivre);
});

export default mercadoLivreRouter;
