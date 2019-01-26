import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeVi from '@angular/common/locales/vi';

import { AppComponent } from './app.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ForecastService } from './forecast.service';
import { HttpClientModule } from '@angular/common/http';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localeVi, 'vi');

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2WeatherIconsModule} from 'ng2-weather-icons';

@NgModule({
  declarations: [
    AppComponent,
    ForecastsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    Ng2WeatherIconsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'vi'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
