import { Injectable } from '@angular/core';
import { country } from '../classes/country';
import { CountryData } from '../classes/CountryData';

@Injectable()
export class CountryService {

    constructor() { }

    getCountryData(): Promise<country[]> {

        return Promise.resolve(CountryData);

    }

}