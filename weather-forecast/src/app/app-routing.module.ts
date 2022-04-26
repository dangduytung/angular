import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForecastDailyComponent } from './forecast-daily/forecast-daily.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';

const routes: Routes = [
  { path: '', redirectTo: 'forecast-daily', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: 'forecast-daily', component: ForecastDailyComponent },
  { path: 'weather-current', component: WeatherCurrentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
