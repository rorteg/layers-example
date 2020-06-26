export class TemperService {
    public static get(age: number, race: string, size: string): string {
        if (size == 'small') {
            return 'docile';
        }

        return 'neutral';
    }
}