import {Dog} from "../../Entity/Dog";
import {HealthConditionInterface} from "../../Datasource/HealthCondition/HealthConditionInterface";

export interface DogBuilderInterface {
    getResult(): Dog;
    buildHealthCondition(healthCondition: HealthConditionInterface);
    buildDog(dogPayload, temper);
}
