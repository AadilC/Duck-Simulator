// import { jasmine } from 'jasmine';
import { Quackologist } from "./src/observers/Quackoligist";
import { Quackable } from "./src/quackables/Quackable";
import { Flock } from "./src/quackables/Flock";
import { AbstractDuckfactory } from "./src/quackables/factories/AbstractDuckFactory";
import { GooseAdapter } from "./src/quackables/geese/GooseAdapter";
import { Goose } from "./src/quackables/geese/Goose";
import { CountingDuckFactory } from "./src/quackables/factories/CountingDuckFactory";
import { QuackCounter } from "./src/quackables/QuackCounter";

export class CompoundDuckFixture {
    private duckFactory: AbstractDuckfactory;
    private mallardDuck: Quackable;
    private redheadDuck: Quackable;
    private duckCall: Quackable;
    private rubberDuck: Quackable;
    private gooseDuck: Quackable;
    private flockOfDucks: Flock;
    private flockOfMallards: Flock;
    private mallardOne: Quackable;
    private mallardTwo: Quackable;
    private mallardThree: Quackable;
    private mallardFour: Quackable;
    private quackologist: Quackologist;

    constructor() {
        this.duckFactory = new CountingDuckFactory();

        //QuackCounter is Decorator Pattern
        this.mallardDuck = this.duckFactory.createMallardDuck();
        this.redheadDuck = this.duckFactory.createRedheadDuck();
        this.duckCall = this.duckFactory.createDuckCall();
        this.rubberDuck = this.duckFactory.createRubberDuck();
        this.gooseDuck = new GooseAdapter(new Goose());//Adapter Pattern

        //Flock is Iterator Pattern
        this.flockOfDucks = new Flock();

        this.flockOfDucks.add(this.redheadDuck);
        this.flockOfDucks.add(this.duckCall);
        this.flockOfDucks.add(this.rubberDuck);
        this.flockOfDucks.add(this.gooseDuck);

        this.flockOfMallards = new Flock();

        this.mallardOne = this.duckFactory.createMallardDuck();
        this.mallardTwo = this.duckFactory.createMallardDuck();
        this.mallardThree = this.duckFactory.createMallardDuck();
        this.mallardFour = this.duckFactory.createMallardDuck();

        this.flockOfMallards.add(this.mallardOne);
        this.flockOfMallards.add(this.mallardTwo);
        this.flockOfMallards.add(this.mallardThree);
        this.flockOfMallards.add(this.mallardFour);

        this.flockOfDucks.add(this.flockOfMallards);
    }

    duckSimulator(): void {
        QuackCounter.quackCount = 0;//set to zero just in case 

        console.log("Duck Simulator: With Abstract Factory");
        console.log("Duck Simulator: Whole Flock Simulation");
        
        console.log(this.simulate(this.flockOfDucks));

        console.log("Duck Simulator: Mallard Flock Simulation");
        
        console.log(this.simulate(this.flockOfMallards));

        console.log("The ducks quacked ", QuackCounter.getQuacks(), " times");
    }

    duckSimulatorObserver(): void {
        QuackCounter.quackCount = 0;//set to zero just in case 

        this.quackologist = new Quackologist();
        this.flockOfDucks.registerObserver(this.quackologist);

        console.log("Duck Simulator: With Observer");

        console.log(this.simulate(this.flockOfDucks));

        console.log("The ducks quacked ", QuackCounter.getQuacks(), " times");
    }

    simulate(duck: Quackable): string {
        return duck.quack();
    }
}
