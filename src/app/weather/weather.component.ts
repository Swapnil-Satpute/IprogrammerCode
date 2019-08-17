import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgOnChangesFeature } from '@angular/core/src/render3';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  result1: any[]; // To store the Data retrived from the API
  City; // To Store City name and Append to to API
  Flag; // If user enter wrong input then flag is activated
  error = 'Please Enter a valid City';
  constructor(private http: HttpClient ) { }

  ngOnInit( ) {
  }

  display() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.City + '&appid=094aa776d64c50d5b9e9043edd4ffd00')
    .subscribe((res: any[]) => {
      this.result1 = res;
      this.Flag = 0;
    }, error => {
      console.log(error);
      this.Flag = 1;
    });
  }

}
