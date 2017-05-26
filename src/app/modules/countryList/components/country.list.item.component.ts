import { Component, Input } from '@angular/core';
import { country } from '../classes/country';

@Component({
    selector: 'country-item',
    template: `
   
    <tr> <td [style.color] = "'red'">  {{ country.label }} </td>
         <td>  {{ country.value }} </td>
    </tr>`
})
   

export class CountryListItemComponent {
    @Input()
    country :  country;
}


