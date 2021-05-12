import { InjectionToken } from '@angular/core';
import { IStrategy } from './iStrategy';

export const StrategyToken = new InjectionToken<Array<IStrategy>>('iStrategy');
