import { ServiceInterface } from "./ServiceInterface";
import { CreateDogPayloadInterface, PutPayloadInterface } from "../Http/Payload";
import { EntityInterface } from "../Entity/EntityInterface";
import { DatasourceAdapterInterface } from "../Datasource/Adapter/DatasourceAdapterInterface";
import { DogBuilderInterface } from "../Constructor/Builder/DogBuilderInterface";
import {HttpCreateDogPayloadAdapter} from "../Datasource/Adapter/HttpCreateDogPayloadAdapter";
import {TemperService} from "./TemperService";
import {DogBuilderPayloadInterface} from "../Constructor/Builder/DogBuilderPayloadInterface";
import {HeathConditionAPI} from "../Datasource/HealthCondition/HeathConditionAPI";
import {HealthCondition} from "../Entity/HealthCondition";
import {HealthConditionInterface} from "../Datasource/HealthCondition/HealthConditionInterface";

export class DogService implements ServiceInterface {
    private dataSourceAdapter: DatasourceAdapterInterface;
    private dogBuilder: DogBuilderInterface;
    private httpCreateDogPayloadAdapter: HttpCreateDogPayloadAdapter;
    private healthConditionAPI: HeathConditionAPI;

    constructor(
        dataSourceAdapter: DatasourceAdapterInterface,
        dogBuilder: DogBuilderInterface,
        httpCreateDogPayloadAdapter: HttpCreateDogPayloadAdapter,
        temperService: TemperService,
        healthConditionAPI: HeathConditionAPI
    ) {
        this.dataSourceAdapter = dataSourceAdapter;
        this.dogBuilder = dogBuilder;
        this.healthConditionAPI = healthConditionAPI;
        this.httpCreateDogPayloadAdapter = httpCreateDogPayloadAdapter;
    }

    async create(dogPayload: CreateDogPayloadInterface) {
        const temper = TemperService.get(dogPayload.age, dogPayload.race, dogPayload.size);
        const healthCondition = await this.healthConditionAPI.get(dogPayload.id);

        this.dogBuilder.buildDog(dogPayload, temper);
        this.dogBuilder.buildHealthCondition(healthCondition);

        const dog = this.dogBuilder.getResult();

        //return this.dogRepository.create(dog);
    }

    update(payload: PutPayloadInterface): boolean {
        return this.dataSourceAdapter.update(payload);
    }
    
    get(identifier: any): EntityInterface {
        const data = this.dataSourceAdapter.get(identifier) as BuilderPayloadInterface;
        return this.dogBuilder.setPayload(data)
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