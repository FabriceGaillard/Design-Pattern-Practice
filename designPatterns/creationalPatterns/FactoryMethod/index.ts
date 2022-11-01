import Logistics from './Factory';
import FactoryA from './FactoryA';
import FactoryB from './FactoryB';

const condition = true;
const logistics: Logistics = condition ? new FactoryA() : new FactoryB();

logistics.doSomething();
