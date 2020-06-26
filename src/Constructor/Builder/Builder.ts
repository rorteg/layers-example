import { BuilderInterface } from "./BuilderInterface";
import { EntityInterface } from "../../Entity/EntityInterface";
import { Entity } from "../../Entity/Entity";
import { BuilderPayloadInterface } from "./BuilderPayloadInterface";

export class Builder implements BuilderInterface {
    private payload: BuilderPayloadInterface;
    private entity: EntityInterface = new Entity();

    setPayload(payload: BuilderPayloadInterface): this {
        this.payload = payload.extract();
        return this;
    }

    buildPart(): this {
        this.entity.setPropretie(this.payload.propertie);
        return this;
    }

    getResult(): EntityInterface {
        return this.entity;
    }

}