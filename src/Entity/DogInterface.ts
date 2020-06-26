import {HealthCondition} from "./HealthCondition";

export interface DogInterface {
    setColor(color: string): DogInterface;
    setRace(race: string): DogInterface;
    setSize(size: string): DogInterface;
    setAge(age: number): DogInterface;
    setTemper(temper: string): DogInterface;
    getColor(): string;
    getRace(): string;
    getSize(): string;
    getAge(): number;
    getTemper(): string;
    getHealthCondition(): HealthCondition;
    setHealthCondition(value: HealthCondition);
}