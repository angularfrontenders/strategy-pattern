import { NgModule } from '@angular/core';

import { ContextService } from './context.service';
import * as strategies from './strategies/index';

@NgModule({
    declarations: [],
    exports: [],
    imports: [],
    providers: [
        ContextService,
        strategies.DryStrategy,
        strategies.SubHumidStrategy,
        strategies.HumidStrategy
    ]
})
export class PatternModule { }
