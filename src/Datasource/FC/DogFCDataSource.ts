import {DataSourceInterface} from "../DataSourceInterface";
import {PutPayloadInterface} from "../../Http/Payload";
import {CreateFCDogInterface} from "./CreateFCDogInterface";


export class DogFCDataSource implements DataSourceInterface {

    create(payload: CreateFCDogInterface): any {
        console.log("INSERT INTO b2c_dogdog VALUES (colunas)", payload.b2c_dogdog);
        return 1;
    }

    delete(identifier: any): boolean {
        return false;
    }

    get(identifier: any): any {

    }

    list(criteria?: any): {}[] {
        return [];
    }

    update(payload: PutPayloadInterface): boolean {
        return false;
    }



}