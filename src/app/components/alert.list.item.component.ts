import { Component, Input } from '@angular/core';
import { Alerts } from '../classes/alerts';

@Component({
    selector: 'alert-item',
    template: `
     <div [myHighlight]= color > <strong> Customer: </strong> {{ alert.customer }}</div>
     <div> <strong> Message: </strong>{{ alert.message }}</div>`,


})

export class AlertListItemComponent {
    @Input()
    alert: Alerts;
    @Input()
    color: string;
}


