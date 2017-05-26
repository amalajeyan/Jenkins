import { Component, OnInit } from '@angular/core'
import { country } from '../classes/country';
import { CountryService } from '../services/country.service';

@Component({

    selector: 'country-list',
    template: `
            <h1> {{countryLabel}}</h1>
          <table>
         <li *ngFor = "let country of countries" > 
                  <country-item [country] = "country" > </country-item>
                </li>
           </table> `
})

export class CountryListComponent implements OnInit {

    constructor(private countryService: CountryService) { }

    countries: country[];
    countryLabel = 'List of Countries';

    getCountryData(): void {
        this.countryService.getCountryData().then(countrylist => this.countries = countrylist);
    }

    ngOnInit() {
        this.getCountryData();
    }

}