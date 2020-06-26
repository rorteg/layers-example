import { GenericPayloadInterface } from "./GenericPayloadInterface";
import {HealthConditionInterface} from "../../Datasource/HealthCondition/HealthConditionInterface";

export interface DogBuilderPayloadInterface extends GenericPayloadInterface {
    color: string;
    race: string;
    size: string; // Medium, Small, Big
    age: number;
    temper: string;
    id: number;
    healthCondition: HealthConditionInterface;
}