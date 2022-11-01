import Logistics from './Factory';
import ProductB from './ProductB';
import Product from './Product';

export default class FactoryB extends Logistics {
  // eslint-disable-next-line
  public createProduct(): Product {
    return new ProductB();
  }
}
