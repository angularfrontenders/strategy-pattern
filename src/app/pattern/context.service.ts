import { Injectable, Injector } from '@angular/core';
import * as strategies from './strategies/index';
import { IConfiguration } from './iConfiguration';

@Injectable()
export class ContextService {
    private _strategies: Array<strategies.IStrategy> = [];

    public constructor(
        private injector: Injector
    ) {
        this._strategies = injector.get(strategies.StrategyToken);
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
