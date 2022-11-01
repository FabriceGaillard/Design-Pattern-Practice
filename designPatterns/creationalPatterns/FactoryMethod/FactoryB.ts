import Factory from './Factory';
import ProductB from './ProductB';
import Product from './Product';

export default class FactoryB extends Factory {
  // eslint-disable-next-line
  public createProduct(): Product {
    return new ProductB();
  }
}
