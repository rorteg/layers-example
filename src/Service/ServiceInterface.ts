import {
    PostPayloadInteface,
    PutPayloadInterface
} from "../Http/Payload";

import {EntityInterface} from "../Entity/EntityInterface";

export interface ServiceInterface {
    create(payload: PostPayloadInteface): any;
    update(payload: PutPayloadInterface): boolean;
    get(indentifier: any): EntityInterface;
    list(criteria?: any): EntityInterface[];
    delete(identifier: any): boolean;
}
