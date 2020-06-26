import {HttpCreateDogPayloadAdapter} from "./Datasource/Adapter/HttpCreateDogPayloadAdapter";
import { DogBuilder } from "./Constructor/Builder/DogBuilder";
import { DogService } from "./Service/DogService";
import { Controller } from "./Http/Controller/Controller";
import {TemperService} from "./Service/TemperService";
import {HeathConditionAPI} from "./Datasource/HealthCondition/HeathConditionAPI";
import {DogFCDataSource} from "./Datasource/FC/DogFCDataSource";
import {DogFCDataSourceAdapter} from "./Datasource/FC/Adapter/DogFCDataSourceAdapter";



const dogBuilder = new DogBuilder();
const httpCreateDogPayloadAdapter = new HttpCreateDogPayloadAdapter();
const temperService = new TemperService();
const healthConditionAPI = new HeathConditionAPI();
const dogMySQLDataSource = new DogFCDataSource();
const dogFCDataSourceAdapter = new DogFCDataSourceAdapter();

const service = new DogService(
    dogBuilder,
    httpCreateDogPayloadAdapter,
    temperService,
    healthConditionAPI,
    dogMySQLDataSource,
    dogFCDataSourceAdapter
);

const controller = new Controller(service);


function main() {
    console.log(controller.post({
        color: "blue",
        race: "husky",
        size: "Small",
        age: 12
    }));
}

main();
