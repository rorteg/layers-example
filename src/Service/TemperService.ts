import {TemperServiceInterface} from "./TemperServiceInterface";

export class TemperService implements TemperServiceInterface {

    get(age: number, race: string, size: string): string {
        if (size == 'small') {
            return 'docile';
        }

        return 'neutral';
    }
}