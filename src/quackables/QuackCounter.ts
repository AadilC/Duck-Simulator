
import { Quackable } from "./Quackable";
import { AbstractQuackObserverble } from "./AbstractQuackObserverble";

export class QuackCounter extends AbstractQuackObserverble implements Quackable {
    private quacker: Quackable;

    static quackCount: number = 0;

    constructor(quacker: Quackable) {
        super();
        this.quacker = quacker;
    }

    getType():string {
        return this.quacker.getType();
    }

    static getQuacks(): number {
        return this.quackCount;
    }

    quack(): string {
        this.notifyObservers();
        QuackCounter.quackCount++;
        return this.quacker.quack();
    }
}