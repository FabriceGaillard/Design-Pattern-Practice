import Factory from './Factory';
import Product from './Product';
import ProductA from './ProductA';

export default class FactoryA extends Factory {
  // eslint-disable-next-line
  public createProduct(): Product {
    return new ProductA();
  }
}
