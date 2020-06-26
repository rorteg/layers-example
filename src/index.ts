import {Datasource} from "./Datasource/Datasource";
import {DatasourceAdapter} from "./Datasource/Adapter/DatasourceAdapter";
import { Builder } from "./Constructor/Builder/Builder";
import { Service } from "./Service/Service";
import { Controller } from "./Http/Controller/Controller";

const datasource = new Datasource();
const datasourceAdapter = new DatasourceAdapter(datasource);
const builder = new Builder();
const service = new Service(datasourceAdapter, builder);

const controller = new Controller(service);
console.log(controller.get());
