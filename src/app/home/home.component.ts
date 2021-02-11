import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User, Weather } from '@app/shared/interfaces';
import { AuthService, WeatherService } from '@app/shared/services';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null;

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private weatherService: WeatherService) { 
    this.user = null;
    authService.getUser().subscribe(val => this.user = val);
    this.city.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(cityName => {
      this.weatherService.getWeather(cityName, this.user?.apiKey ?? '').subscribe(val => console.log(val))
    } )
  }

  ngOnInit() {
  }


  get city(): AbstractControl {
    return this.weatherForm.get('city')!;
  }
}
