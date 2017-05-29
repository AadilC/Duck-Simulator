import { Quackable } from "./Quackable";
import { AbstractQuackObserverble } from "./AbstractQuackObserverble";

export class Flock extends AbstractQuackObserverble implements Quackable {

    private quackers: Quackable[];

    constructor() {
        super();
        this.quackers = [];
    }

    getType(): string {
        return 'Flock';
    }

    add(quacker: Quackable): void {
        this.quackers.push(quacker);
    }

    quack(): string {

        let quacks = '';
        this.quackers.forEach((quacker: Quackable) => {

            quacks += quacker.quack();
            quacks += '\n';
            quacks += this.notifyObservers();
        });

        return quacks;
    }

}