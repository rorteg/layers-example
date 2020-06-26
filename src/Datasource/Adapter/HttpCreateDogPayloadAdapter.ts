import { AdapterInterface } from "../../Constructor/Builder/AdapterInterface";
import {CreateDogPayloadInterface} from "../../Http/Payload";

export class HttpCreateDogPayloadAdapter implements AdapterInterface {

    public convert(payload: CreateDogPayloadInterface) {
        return {
            dog_color: payload.color,
            dog_race: payload.race,
            dog_size: payload.size,
            dog_age: payload.age
        };
    }
}
