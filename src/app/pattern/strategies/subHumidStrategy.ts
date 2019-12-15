import { Injectable } from '@angular/core';
import { IStrategy } from './iStrategy';
import { StrategyTemplate } from './strategyTemplate.service';
import { IConfiguration } from '../iConfiguration';
import { ClimateZone } from '../climate';

@Injectable()
export class SubHumidStrategy extends StrategyTemplate implements IStrategy {
    public order(value: IConfiguration): number {
        return value.zone === ClimateZone.SubHumid ? -1 : 0;
    }

    public canApply(value: IConfiguration): boolean {
        return value.humidity > 0.2 && value.humidity <= 0.5;
    }

    public apply(value: IConfiguration): void {
        this.irrigate(10);
    }
}
