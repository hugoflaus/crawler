class MercadoLivre{
  name: string;

  link: string;

  price: number;

  store: string;

  state: string;

  constructor(name: string, link: string, price: number, store: string, state: string){
    this.name = name;
    this.link = link;
    this.price = price;
    this.store = store;
    this.state = state;
  }
}

export default MercadoLivre;
