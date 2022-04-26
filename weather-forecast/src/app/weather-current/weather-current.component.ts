import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css'],
})
export class WeatherCurrentComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  search(formValues: { location: string; }) {
    this.http
      .get(
        'http://api.weatherstack.com/current?access_key=46addecd0af6619b0cb9cfc3996e7b9b&query=' +
          formValues.location
      )
      .subscribe((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }
}
