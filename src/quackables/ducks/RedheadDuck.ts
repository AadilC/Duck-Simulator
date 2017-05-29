import { AbstractQuackObserverble } from "../AbstractQuackObserverble";
import { Quackable } from "../Quackable";

export class RedheadDuck extends AbstractQuackObserverble implements Quackable {
    getType(): string {
        return 'RedheadDuck';
    }
    quack(): string {
        this.notifyObservers();
        return 'Quack';
    }
}