import {HealthCondition} from "./HealthCondition";

export interface DogInterface {
    setColor(color: string): DogInterface;
    setRace(race: string): DogInterface;
    setSize(size: string): DogInterface;
    setAge(age: number): DogInterface;
    getColor(): string;
    getRace(): string;
    getSize(): string;
    getAge(): number;
    getHealthCondition(): HealthCondition;
    setHealthCondition(value: HealthCondition);
}