import { EntityInterface } from "./EntityInterface";

export class Entity implements EntityInterface {
    private propertie: string;

    setPropretie(propertie: string): this {
        this.propertie = propertie;
        return this;
    }
    
    getPropertie(): string {
        return this.propertie;
    }
    
    printable() {
        
    }
}