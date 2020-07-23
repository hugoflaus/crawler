import MercadoLivre from '../models/MercadoLivre';
import accessMercadoLivre from '../services/AccessMercadoLivre';
import cheerio from 'cheerio';


class MercadoLivreRepository {
  private mercadoLivreData: MercadoLivre[];

  constructor() {
    this.mercadoLivreData = [];
  }


  public create(name: string, link: string, price: number, store: string, state: string): MercadoLivre {
    const mercadoLivre = new MercadoLivre(name, link, price, store, state);

    this.mercadoLivreData.push(mercadoLivre);

    return mercadoLivre;
  }

  public async find(search: string, limit: number): Promise<MercadoLivre[]> {

    let response;
    try{
      response = await accessMercadoLivre.get(`/${search}`);
    }catch(error){
      throw Error("Não foi possível realizar a busca.");
    }

    const $ = cheerio.load(response.data);
    let listProducts: MercadoLivre[] = [];
    let listProductsSize =  listProducts.length;

    do {

      if (listProductsSize > 0) {
        search = `${search}_Desde_${
          listProductsSize + 1 < limit ? listProductsSize + 1 : limit
          }`;
      }

      $('.results-item').slice(0, (limit - listProductsSize)).each(function (this: typeof $, index, element) {

        const name = $(this).find('.item__title')
          .text()
          .trim();
        const link = $(this).find('a')
          .attr("href");
        const price = Number.parseFloat($(this).find('.item__price > .price__fraction')
          .text()
          .trim() + ',' + $(this)
            .find('.item__price > .price__decimals')
            .text()
            .trim());
        const store = $(this)
          .find('div.rowItem a .item__brand-title-tos')
          .text()
          .replace('por ', '')
          .trim();
        const state = $(this)
          .find('div.rowItem .item__info .item__condition')
          .text()
          .trim();

        listProducts = [...listProducts, new MercadoLivre(name, link || '', price, store, state)];
      });
      this.mercadoLivreData = listProducts;
      listProductsSize = listProducts.length;
    } while (listProductsSize < limit);

    return this.mercadoLivreData;
  }
}

export default MercadoLivreRepository;
