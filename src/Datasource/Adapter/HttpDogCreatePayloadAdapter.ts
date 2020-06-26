import { AdapterInterface } from "../../Constructor/Builder/AdapterInterface";
import {DogBuilderPayloadInterface} from "../../Constructor/Builder/DogBuilderPayloadInterface";

export class HttpDogCreatePayloadAdapter implements AdapterInterface {
    convert(payload: any): DogBuilderPayloadInterface {
        throw new Error("Method not implemented.");
    }

}