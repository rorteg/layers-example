import { GenericPayloadInterface } from "../../Constructor/Builder/GenericPayloadInterface";
import { BuilderPayloadInterface } from "../../Constructor/Builder/BuilderPayloadInterface";

export class HttpDogCreatePayloadAdapter implements GenericPayloadInterface {
    adapt(payload: any): BuilderPayloadInterface {
        throw new Error("Method not implemented.");
    }

}