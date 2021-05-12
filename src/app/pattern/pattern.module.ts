import { NgModule } from '@angular/core';

import { ContextService } from './context.service';
import * as strategies from './strategies/index';

@NgModule({
    declarations: [],
    exports: [],
    imports: [],
    providers: [
        ContextService,
        { provide: strategies.StrategyToken, useClass: strategies.DryStrategy, multi: true },
        { provide: strategies.StrategyToken, useClass: strategies.SubHumidStrategy, multi: true },
        { provide: strategies.StrategyToken, useClass: strategies.HumidStrategy, multi: true }
    ]
})
export class PatternModule { }
