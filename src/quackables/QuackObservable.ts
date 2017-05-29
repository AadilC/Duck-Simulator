
import { Observer } from "../observers/Observer";

export interface QuackObservable {
    getType(): string;
    registerObserver(observer: Observer): void;
    notifyObservers(): void;
}