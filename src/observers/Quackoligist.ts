import { Observer } from "./Observer";
import { QuackObservable } from "../quackables/QuackObservable";

export class Quackologist implements Observer {
    update(observerble: QuackObservable): string {
         return "Quackologist: the " + observerble.getType() + " just quacked";
    }
}