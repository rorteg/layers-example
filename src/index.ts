import {DogWebServiceDataSource} from "./Datasource/DogWebServiceDataSource";
import {HttpCreateDogPayloadAdapter} from "./Datasource/Adapter/HttpCreateDogPayloadAdapter";
import { DogBuilder } from "./Constructor/Builder/DogBuilder";
import { DogService } from "./Service/DogService";
import { Controller } from "./Http/Controller/Controller";

const datasource = new DogWebServiceDataSource();
const datasourceAdapter = new HttpCreateDogPayloadAdapter(datasource);
const builder = new DogBuilder();
const service = new DogService(datasourceAdapter, builder);

const controller = new Controller(service);
console.log(controller.get());
