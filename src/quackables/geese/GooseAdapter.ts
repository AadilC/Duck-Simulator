import { Goose } from "./Goose";
import { Observer } from "../../observers/Observer";
import { Quackable } from "../Quackable";
import { AbstractQuackObserverble } from "../AbstractQuackObserverble";

export class GooseAdapter extends AbstractQuackObserverble implements Quackable {

    private goose: Goose;

    constructor(goose: Goose) {
        super();
        this.goose = goose;
    }

    getType(): string {
        return 'Goose';
    }

    quack(): string {
        this.notifyObservers();
        return this.goose.honk();
    }
}