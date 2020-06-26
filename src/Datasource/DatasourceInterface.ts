import {
    PostPayloadInteface,
    PutPayloadInterface
} from "../Http/Payload";

export interface DatasourceInterface {
    create(payload: PostPayloadInteface): any;
    update(payload: PutPayloadInterface): boolean;
    get(indentifier: any): any;
    list(criteria?: any): {}[];
    delete(identifier: any): boolean;
}
