import Factory from './Factory';
import FactoryA from './FactoryA';
import FactoryB from './FactoryB';

const condition = true;
const factory: Factory = condition ? new FactoryA() : new FactoryB();

factory.doSomething();
