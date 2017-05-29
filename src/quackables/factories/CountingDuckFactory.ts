import { AbstractDuckfactory } from "./AbstractDuckFactory";
import { MallardDuck } from "../ducks/MallardDuck";
import { Quackable } from "../Quackable";
import { RedheadDuck } from "../ducks/RedheadDuck";
import { RubberDuck } from "../ducks/RubberDuck";
import { DuckCall } from "../ducks/DuckCall";
import { QuackCounter } from "../QuackCounter";

export class CountingDuckFactory extends AbstractDuckfactory {
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }
    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedheadDuck());
    }
    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall());
    }
    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}