import { DatasourceAdapterInterface } from "./DatasourceAdapterInterface"
import { DatasourceInterface } from "../DatasourceInterface";
import { PostPayloadInteface, PutPayloadInterface } from "../../Http/Payload";
import { BuilderPayloadInterface } from "../../Constructor/Builder/BuilderPayloadInterface";
import { GenericPayloadInterface } from "../../Constructor/Builder/GenericPayloadInterface";

export class DatasourceAdapter implements GenericPayloadInterface {
    private datasource: DatasourceInterface;
    
    constructor(datasource: DatasourceInterface) {
        this.datasource = datasource;
    }   

    extract(payload: any): BuilderPayloadInterface {
        return {
            propertie: this.datasource.get(identifier).identifier
        };
    }
}
