import { AbstractQuackObserverble } from "../AbstractQuackObserverble";
import { Quackable } from "../Quackable";

export class DuckCall extends AbstractQuackObserverble implements Quackable {
    getType(): string {
        return 'DuckCall';
    }
    quack(): string {
        this.notifyObservers();
        return 'Kwak';
    }
}