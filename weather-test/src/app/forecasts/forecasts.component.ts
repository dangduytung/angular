import {Component, OnInit} from '@angular/core';
import {ForecastDaily} from '../../models/forecastDaily';
import {ForecastService} from '../forecast.service';
import { ForecastModel } from 'src/models/forecastModel';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {

  constructor(public forecastService: ForecastService) {
  }

  // forecastDaily: ForecastDaily;
  forecastModel: ForecastModel;

  ngOnInit() {
    // this.forecastService.getForecasts().subscribe(data => this.forecastDaily = data.list);
    this.search('Ha noi');
  }

  search(address: string): void {
    if (!address) {
      console.warn('Address must be not empty');
    }
    console.log('Search : ' + address)
    this.forecastService.getForecastDaily(address).subscribe(data => this.forecastModel = data);
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }
}
