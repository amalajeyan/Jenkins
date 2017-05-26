import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryListComponent } from './components/countrylist.component';
import { CountryListItemComponent } from './components/country.list.item.component';
import { CountryService } from './services/country.service';
import { CountryRoutingModule } from './country-routing.module';
@NgModule({
  imports: [ CommonModule, CountryRoutingModule ],
  declarations: [ CountryListComponent, CountryListItemComponent],
  providers: [ CountryService ]
 
})
export class CountryModule { }
