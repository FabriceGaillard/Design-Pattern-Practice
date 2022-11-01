import Logistics from './Factory';
import Product from './Product';
import ProductA from './ProductA';

export default class FactoryA extends Logistics {
  // eslint-disable-next-line
  public createProduct(): Product {
    return new ProductA();
  }
}
