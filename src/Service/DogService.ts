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
import {DogFCDataSource} from "../Datasource/FC/DogFCDataSource";
import {DogFCDataSourceAdapter} from "../Datasource/FC/Adapter/DogFCDataSourceAdapter";
import {AdapterInterface} from "../Constructor/Builder/AdapterInterface";
import {DataSourceInterface} from "../Datasource/DataSourceInterface";
import {TemperServiceInterface} from "./TemperServiceInterface";

export class DogService implements ServiceInterface {
    private dogBuilder: DogBuilderInterface;
    private httpCreateDogPayloadAdapter: HttpCreateDogPayloadAdapter;
    private temperService: TemperService;
    private healthConditionAPI: HeathConditionAPI;
    private dogMySQLDataSource: DogFCDataSource;
    private dogFCDataSourceAdapter: DogFCDataSourceAdapter;

    constructor(
        dogBuilder: DogBuilderInterface,
        httpCreateDogPayloadAdapter: AdapterInterface,
        temperService: TemperServiceInterface,
        healthConditionAPI: DataSourceInterface,
        dogMySQLDataSource: DataSourceInterface,
        dogFCDataSourceAdapter: AdapterInterface
    ) {
        this.dogBuilder = dogBuilder;
        this.healthConditionAPI = healthConditionAPI;
        this.httpCreateDogPayloadAdapter = httpCreateDogPayloadAdapter;
        this.dogMySQLDataSource = dogMySQLDataSource;
        this.dogFCDataSourceAdapter = dogFCDataSourceAdapter;
        this.temperService = temperService;
    }

    create(dogPayload: CreateDogPayloadInterface) {
        const temper = this.temperService.get(dogPayload.age, dogPayload.race, dogPayload.size);
        const healthCondition = this.healthConditionAPI.get(dogPayload);

        this.dogBuilder.buildDog(dogPayload, temper);
        this.dogBuilder.buildHealthCondition(healthCondition);

        const dog = this.dogBuilder.getResult();

        const dataSourceDog = this.dogFCDataSourceAdapter.convert(dog);

        return this.dogMySQLDataSource.create(dataSourceDog);
    }

    update(payload: PutPayloadInterface): boolean {
        return true;
    }
    
    get(identifier: any): EntityInterface {
        /*const data = this.dataSourceAdapter.get(identifier) as BuilderPayloadInterface;
        return this.dogBuilder.setPayload(data)
            .buildPart()
            .getResult();*/
        return undefined;
    }

    list(criteria?: any): EntityInterface[] {
        throw new Error("Method not implemented.");
    }

    delete(identifier: any): boolean {
        throw new Error("Method not implemented.");
    }

}