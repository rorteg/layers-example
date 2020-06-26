import { DogBuilderInterface } from "./DogBuilderInterface";
import {Dog} from "../../Entity/Dog";
import {HealthCondition} from "../../Entity/HealthCondition";
import {HealthConditionInterface} from "../../Datasource/HealthCondition/HealthConditionInterface";

export class DogBuilder implements DogBuilderInterface {

    private dog: Dog;

    constructor() {
        this.reset();
    }

    public reset() {
        this.dog = new Dog();
    }

    public buildDog(dogPayload, temper): void {
        this.dog
            .setAge(dogPayload.age)
            .setColor(dogPayload.color)
            .setRace(dogPayload.race)
            .setSize(dogPayload.size)
            .setTemper(temper);
    }

    public buildHealthCondition(healthCondition: HealthConditionInterface): this {
        this.dog.setHealthCondition(new HealthCondition()
            .setArterialPressure(healthCondition.arterialPressure)
            .setCastrated(healthCondition.castrated)
            .setCholesterol(healthCondition.cholesterol));

        return this;
    }

    public getResult(): Dog {
        const result = this.dog;
        this.reset();
        return result;
    }
}