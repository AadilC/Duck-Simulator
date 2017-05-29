import { QuackObservable } from "./QuackObservable";

export interface Quackable extends QuackObservable {
    quack():string;
}