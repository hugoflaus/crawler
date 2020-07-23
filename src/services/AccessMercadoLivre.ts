import axios from 'axios';

const accessMercadoLivre = axios.create({
  baseURL: 'https://lista.mercadolivre.com.br/',
});

export default accessMercadoLivre;
