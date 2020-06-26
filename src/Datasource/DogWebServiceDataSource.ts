import {DatasourceInterface} from "./DatasourceInterface";
import { CreateDogPayloadInterface, PutPayloadInterface } from "../Http/Payload";

export class DogWebServiceDataSource implements DatasourceInterface{
    create(payload: CreateDogPayloadInterface) {
        return {
            dog_color: 'brown',
            dog_race: 'husky',
            dog_size: 'big',
            dog_age: 12
        }
    }

    update(payload: PutPayloadInterface): boolean {
        return true;
    }

    get(identifier: any): any {
        return {identifier};
    }

    list(criteria?: any): any[] {
        return [{}];
    }
    
    delete(identifier: any): boolean {
        return true;
    }
}
