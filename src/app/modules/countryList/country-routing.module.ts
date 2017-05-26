import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/countrylist.component';

const CountryRoutes: Routes = [
    {
        path: 'CountryList',
        component: CountryListComponent
    }
];

@NgModule({

    imports: [RouterModule.forChild(CountryRoutes)],
    exports: [RouterModule]
})

export class CountryRoutingModule {

}