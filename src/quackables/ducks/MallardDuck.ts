import { AbstractQuackObserverble } from "../AbstractQuackObserverble";
import { Quackable } from "../Quackable";

export class MallardDuck extends AbstractQuackObserverble implements Quackable {
    getType(): string {
        return 'MallardDuck';
    }
    
    quack(): string {
        this.notifyObservers();
        return 'Quack';
    }
}