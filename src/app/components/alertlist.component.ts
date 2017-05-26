import { Component, OnInit } from '@angular/core'
import { Alerts } from '../classes/alerts';
import { AlertsService } from '../services/alerts.service';

@Component({

    selector: 'alert-list',
    template: `
            <h1> {{alertLabel}}</h1>
            <h4>Pick a highlight color</h4>
            <div>
            <input type="radio" name="colors" (click)="color='lightgreen'">Green
            <input type="radio" name="colors" (click)="color='yellow'">Yellow
            <input type="radio" name="colors" (click)="color='cyan'">Cyan
            </div>
            <ul>
                <li *ngFor = "let alert of alerts" > 
                  <alert-item [alert] = "alert" [color] = "color" > </alert-item>
                </li>
            </ul> `,
    providers: [AlertsService]
})

export class AlertListComponent implements OnInit {

    constructor(private alertsService: AlertsService) { }

    alerts: Alerts[];
    alertLabel = 'List of Alerts';
    color: string;

    getAlertsData(): void {
        this.alertsService.getAlertsData().then(alertslist => this.alerts = alertslist);
    }

    ngOnInit() {
        this.getAlertsData();
    }

}