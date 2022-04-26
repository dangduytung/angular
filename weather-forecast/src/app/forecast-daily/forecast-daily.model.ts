export class ForecastDaily {
  code!: string;
  city!: ForecastCity;
  cnt!: number;
  list!: Array<Forecast>;
}

export class ForecastCity {
  id!: number;
  name!: string;
  country!: string;
}

export class Forecast {
  dt!: number;
  temp!: ForecastTemp;
  pressure!: number;
  weather!: ForecastWeather[];
  speed!: number;
  deg!: number;
  clouds!: number;
  humidity!: number;
}

export class ForecastTemp {
  day!: number;
  min!: number;
  max!: number;
  night!: number;
  eve!: number;
  morn!: number;
}

export class ForecastWeather {
  id!: number;
  main!: string;
  description!: string;
  icon!: string;
}
