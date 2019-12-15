export abstract class StrategyTemplate {
    protected irrigate(minutes: number): void {
        console.log(`irrigation duration: ${minutes}`);
    }
}
