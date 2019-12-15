import { Injectable } from '@angular/core';
import * as strategies from './strategies/index';
import { IConfiguration } from './iConfiguration';

@Injectable()
export class ContextService {
    private _strategies: Array<strategies.IStrategy> = [];

    public constructor(
        private _dryStrategy: strategies.DryStrategy,
        private _subHumidStrategy: strategies.SubHumidStrategy,
        private _humidStrategy: strategies.HumidStrategy
    ) {
        this._strategies = [
            this._dryStrategy,
            this._subHumidStrategy,
            this._humidStrategy
        ];
    }

    public applyStrategy(value: IConfiguration): void {
        const strategiesFounded: Array<strategies.IStrategy> = this._strategies
            .filter((strategy: strategies.IStrategy) => {
                return strategy.canApply(value);
            })
            .sort(
                (strategyA: strategies.IStrategy, strategyB: strategies.IStrategy) => {
                    return strategyA.order(value);
                }
            );

        (strategiesFounded || []).forEach((strategy: strategies.IStrategy) => {
            strategy.apply(value);
        });
    }
}
