import { Component, OnInit } from '@angular/core';

import { ContextService } from './pattern/context.service';
import { IConfiguration } from './pattern/iConfiguration';
import { ClimateZone } from './pattern/climate';

interface IClimateZone {
    id: ClimateZone;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Strategy pattern';
    configuration: IConfiguration = {
        humidity: 0,
        zone: ClimateZone.Dry
    };
    zones = Array<IClimateZone>();

    public constructor(private _contextService: ContextService) { }

    ngOnInit(): void {
        this.zones = Array<IClimateZone>();
        this.zones.push({ id: ClimateZone.Dry, name: 'dry' });
        this.zones.push({ id: ClimateZone.SubHumid, name: 'sub-humid' });
        this.zones.push({ id: ClimateZone.Humid, name: 'humid' });
    }

    public click(): void {
        this._contextService.applyStrategy(this.configuration);
    }
}
