import {
    CreateDogPayloadInterface,
    PutPayloadInterface
} from "../Http/Payload";

export interface DataSourceInterface {
    create(payload: any): any;
    update(payload: any): boolean;
    get(identifier: any): any;
    list(criteria?: any): {}[];
    delete(identifier: any): boolean;
}
