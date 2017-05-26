import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AlertListComponent } from './components/alertlist.component';
import { AlertListItemComponent } from './components/alert.list.item.component';
import { HomeComponent } from './components/home.component';
import { CountryModule } from './modules/countryList/country.module';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    CountryModule,
    RouterModule.forRoot([
      {
        path: 'Home', component: HomeComponent
      },
      {
        path: '', redirectTo: '/Home', pathMatch: 'full'
      },
      {
        path: 'AlertList',
        component: AlertListComponent
      }
    ])],
  declarations: [AppComponent, HomeComponent, AlertListComponent, AlertListItemComponent, HighlightDirective],
  bootstrap: [AppComponent]

})
export class AppModule { }
