import {HealthConditionInterface} from "./HealthConditionInterface";
import {DataSourceInterface} from "../DataSourceInterface";

export class HeathConditionAPI implements DataSourceInterface {

    get(dog): HealthConditionInterface {
        return {
            arterialPressure: '123',
            cholesterol: '321',
            castrated: true,
        };
    }

    create(payload: any): any {
    }

    delete(identifier: any): boolean {
        return false;
    }

    list(criteria?: any): {}[] {
        return [];
    }

    update(payload: any): boolean {
        return false;
    }
}