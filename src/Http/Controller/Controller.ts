import {ServiceInterface} from "../../Service/ServiceInterface";
import {
    CreateDogPayloadInterface,
    PutPayloadInterface
} from "../Payload";

export class Controller {
    private service: ServiceInterface;

    constructor(service: ServiceInterface) {
        this.service = service;
    }

    get(/* request */) {
        // Validate

        return {data: this.service.get("identifier")};
    }

    post(/* request */) {
        // validate

        return this.service.create({} as CreateDogPayloadInterface);
    }

    put(/* request */) {
        // validate

        return this.service.update({} as PutPayloadInterface);
    }

    list(/* request */) {
        return this.service.list();
    }

    delete(/* request */) {
        return this.service.delete("identifier");
    }
}
