import Product from './Product';

export default class ProductA implements Product {
  public doSomething(): this {
    return this;
  }
}
