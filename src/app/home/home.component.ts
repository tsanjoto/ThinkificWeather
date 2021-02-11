import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User, Weather } from '@app/shared/interfaces';
import { AuthService, WeatherService } from '@app/shared/services';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null;
  weather: Weather | null;
  isLoading = false;

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private weatherService: WeatherService, private _snackBar: MatSnackBar) { 
    this.user = null;
    this.weather = null;
    authService.getUser().subscribe(val => this.user = val);
    this.city.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(cityName => {
      this.isLoading = true
      this.weatherService.getWeather(cityName, this.user?.apiKey ?? '')
      .pipe(
        finalize(() => this.isLoading = false),
      )
      .subscribe(
        res => {
          this.weather = res[0];
        },
        err => {
          this._snackBar.open(err, '', {
            duration: 5000,
            panelClass: ['mat-error']
          })
          this.weather = null;
        }
        
        )
    } )
  }


  ngOnInit() {
  }


  get city(): AbstractControl {
    return this.weatherForm.get('city')!;
  }
}
