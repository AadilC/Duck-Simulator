import { QuackObservable } from "./QuackObservable";
import { Observer } from "../observers/Observer";

export class AbstractQuackObserverble implements QuackObservable {

    private observers: Observer[];

    constructor() {
        this.observers = [];
    }

    getType(): string {
        throw new Error("Method not implemented.");
    }
    
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(): string {

        let updates :string = '';
        this.observers.forEach((observer: Observer) => {
            updates += observer.update(this);
            updates += '\n';
        });

        return updates;
    }
} 