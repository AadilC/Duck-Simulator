import { QuackObservable } from "../quackables/QuackObservable";

export interface Observer {
    update(observer: QuackObservable): string;
}