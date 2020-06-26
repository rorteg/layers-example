import { ServiceInterface } from "./ServiceInterface";
import { PostPayloadInteface, PutPayloadInterface } from "../Http/Payload";
import { EntityInterface } from "../Entity/EntityInterface";
import { DatasourceAdapterInterface } from "../Datasource/Adapter/DatasourceAdapterInterface";
import { BuilderInterface } from "../Constructor/Builder/BuilderInterface";
import { BuilderPayloadInterface } from "../Constructor/Builder/BuilderPayloadInterface";
import { Entity } from "../Entity/Entity";

export class Service implements ServiceInterface {
    private datasourceAdapter: DatasourceAdapterInterface;
    private builder: BuilderInterface;

    constructor(
        datasourceAdapter: DatasourceAdapterInterface,
        builder: BuilderInterface
    ) {
        this.datasourceAdapter = datasourceAdapter;
        this.builder = builder;
    }

    create(payload: PostPayloadInteface) {
        const data = this.datasourceAdapter.extract(payload) as BuilderPayloadInterface;
        return this.builder.setPayload(data)
            .buildPart()
            .getResult();

        
        return this.datasourceAdapter.create(payload);
    }

    update(payload: PutPayloadInterface): boolean {
        return this.datasourceAdapter.update(payload);
    }
    
    get(identifier: any): EntityInterface {
        const data = this.datasourceAdapter.get(identifier) as BuilderPayloadInterface;
        return this.builder.setPayload(data)
            .buildPart()
            .getResult();
    }

    list(criteria?: any): EntityInterface[] {
        throw new Error("Method not implemented.");
    }

    delete(identifier: any): boolean {
        throw new Error("Method not implemented.");
    }

}