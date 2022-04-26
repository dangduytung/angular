import { Component, OnInit } from '@angular/core';
import { ForecastDailyService } from './forecast-daily.service';
import { ForecastDaily } from './forecast-daily.model';

@Component({
  selector: 'app-forecast-daily',
  templateUrl: './forecast-daily.component.html',
  styleUrls: ['./forecast-daily.component.css'],
})
export class ForecastDailyComponent implements OnInit {
  constructor(public forecastDailyService: ForecastDailyService) {}

  forecastDaily: ForecastDaily = new ForecastDaily();

  ngOnInit(): void {
    this.search('Ha noi');
  }

  search(address: string): void {
    if (!address) {
      console.warn('Address must be not empty');
      return;
    }
    console.log('Search : ' + address);
    this.forecastDailyService
      .getForecastDaily(address)
      .subscribe((data) => (this.forecastDaily = data));
  }

  // (keydown)="onKeyDownEvent($event)"
  onKeyDownEvent(event: any) {
    console.log(`onKeyDownEvent: `+ event.target.value);

    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }
}
