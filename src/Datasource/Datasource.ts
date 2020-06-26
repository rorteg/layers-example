import {DatasourceInterface} from "./DatasourceInterface";
import { PostPayloadInteface, PutPayloadInterface } from "../Http/Payload";

export class Datasource implements DatasourceInterface{
    create(payload: PostPayloadInteface) {
        return "id";
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
