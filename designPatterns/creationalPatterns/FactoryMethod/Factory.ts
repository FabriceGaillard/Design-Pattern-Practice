import Product from './Product';

export default abstract class Factory {
  public doSomething(): this {
    const product: Product = this.createProduct();

    product.doSomething();

    return this;
  }

  public abstract createProduct(): Product;
}
