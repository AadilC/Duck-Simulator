import { DuckCall } from "../ducks/DuckCall";
import { MallardDuck } from "../ducks/MallardDuck";
import { Quackable } from "../Quackable";
import { RedheadDuck } from "../ducks/RedheadDuck";
import { RubberDuck } from "../ducks/RubberDuck";

export class AbstractDuckfactory {
    createMallardDuck():Quackable {
        return new MallardDuck();
    }
    createRedheadDuck():Quackable {
        return new RedheadDuck();
    }
    createDuckCall():Quackable {
        return new DuckCall();
    }
    createRubberDuck():Quackable {
        return new RubberDuck();
    }
}