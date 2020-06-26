import { GenericPayloadInterface } from "../../Constructor/Builder/GenericPayloadInterface";
import {CreateDogPayloadInterface} from "../../Http/Payload";

export class HttpCreateDogPayloadAdapter implements GenericPayloadInterface {

    public adapt(payload: CreateDogPayloadInterface) {
        return {
            dog_color: payload.color,
            dog_race: payload.race,
            dog_size: payload.size,
            dog_age: payload.age
        };
    }
}
