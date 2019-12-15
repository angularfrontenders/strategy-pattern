import { Injectable } from '@angular/core';
import { IStrategy } from './iStrategy';
import { StrategyTemplate } from './strategyTemplate.service';
import { IConfiguration } from '../iConfiguration';
import { ClimateZone } from '../climate';

@Injectable()
export class DryStrategy extends StrategyTemplate implements IStrategy {
    public order(value: IConfiguration): number {
        return value.zone === ClimateZone.Dry ? -1 : 0;
    }

    public canApply(value: IConfiguration): boolean {
        return value.humidity < 0.2;
    }

    public apply(value: IConfiguration): void {
        this.irrigate(15);
    }
}
