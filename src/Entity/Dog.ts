import {DogInterface} from "./DogInterface";
import {HealthCondition} from "./HealthCondition";

export class Dog implements DogInterface {
    private color: string;
    private race: string;
    private size: string;
    private age: number;
    private healthCondition: HealthCondition;
    private temper: string;

    setTemper(temper: string): this {
        this.temper = temper;
        return this;
    }

    getTemper(): string {
        return this.temper;
    }

    getHealthCondition(): HealthCondition {
        return this.healthCondition;
    }

    setHealthCondition(value: HealthCondition): this {
        this.healthCondition = value;
        return this;
    }

    setColor(color): Dog {
        this.color = color;
        return this;
    }

    setRace(race): Dog {
        this.race = race;
        return this;
    }

    setSize(size): Dog {
        this.size = size;
        return this;
    }

    setAge(age): Dog {
        this.age = age;
        return this;
    }

    getColor(): string {
        return this.color;
    }

    getRace(): string {
        return this.race;
    }

    getSize(): string {
        return this.size;
    }

    getAge(): number {
        return this.age;
    }
}