import { BuilderPayloadInterface } from "./BuilderPayloadInterface";
import { EntityInterface } from "../../Entity/EntityInterface";

export interface BuilderInterface {
    setPayload(payload: BuilderPayloadInterface): this;
    buildPart(): this;
    getResult(): EntityInterface;
}
