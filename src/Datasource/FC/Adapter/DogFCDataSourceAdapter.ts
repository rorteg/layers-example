import {CreateFCDogInterface} from "../CreateFCDogInterface";
import {AdapterInterface} from "../../../Constructor/Builder/AdapterInterface";
import {DogInterface} from "../../../Entity/DogInterface";

export class DogFCDataSourceAdapter implements AdapterInterface {

    convert(payload: DogInterface): CreateFCDogInterface {
        return {
            b2c_dogdog: {
                b2c_color_color: payload.getColor(),
                b2c_race_race: payload.getRace(),
                b2c_size_size: payload.getSize(),
                b2c_age_age: payload.getAge(),
                b2c_temper_temper: payload.getTemper()
            }
        };
    }
}
