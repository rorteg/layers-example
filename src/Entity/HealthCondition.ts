
export class HealthCondition {
    private arterialPressure: string;
    private cholesterol: string;
    private castrated: boolean;

    getArterialPressure(): string {
        return this.arterialPressure;
    }

    setArterialPressure(value: string): this {
        this.arterialPressure = value;
        return this;
    }

    getCholesterol(): string {
        return this.cholesterol;
    }

    setCholesterol(value: string): this {
        this.cholesterol = value;
        return this;
    }

    getCastrated(): boolean {
        return this.castrated;
    }

    setCastrated(value: boolean): this {
        this.castrated = value;
        return this;
    }

}