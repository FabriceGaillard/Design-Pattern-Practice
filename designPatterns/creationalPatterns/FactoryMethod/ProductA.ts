import Product from './Product';

export default class ProductB implements Product {
  public doSomething(): this {
    return this;
  }
}
