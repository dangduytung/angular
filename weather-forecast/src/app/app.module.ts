import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import localeVi from '@angular/common/locales/vi';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForecastDailyComponent } from './forecast-daily/forecast-daily.component';
import { ForecastDailyService } from './forecast-daily/forecast-daily.service';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';

registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [AppComponent, ForecastDailyComponent, PageNotFoundComponent, WeatherCurrentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'vi' }, ForecastDailyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
