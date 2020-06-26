import {HealthConditionInterface} from "./HealthConditionInterface";

export class HeathConditionAPI {
    async get(dogId): Promise<HealthConditionInterface> {
        return new Promise(() => {
            return {
                arterialPressure: '123',
                cholesterol: '321',
                castrated: true,
            }
        });
    }
}