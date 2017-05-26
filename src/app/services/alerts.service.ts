import { Injectable } from '@angular/core';
import { Alerts } from '../classes/alerts';
import { ALERTS } from '../classes/alertsData';

@Injectable()
export class AlertsService {

    constructor() { }

    getAlertsData(): Promise<Alerts[]> {

        return Promise.resolve(ALERTS);

    }

}