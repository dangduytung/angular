import {ForecastDaily} from './forecastDaily';
import {ForecastCity} from './forecastCity';

export class ForecastModel {
  code: string;
  city: ForecastCity;
  cnt: number;
  list: Array<ForecastDaily>;
}
