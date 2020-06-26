import {
    CreateDogPayloadInterface,
    PutPayloadInterface
} from "../Http/Payload";

export interface DatasourceInterface {
    create(payload: CreateDogPayloadInterface): any;
    update(payload: PutPayloadInterface): boolean;
    get(indentifier: any): any;
    list(criteria?: any): {}[];
    delete(identifier: any): boolean;
}
