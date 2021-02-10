import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  get city(): AbstractControl {
    return this.weatherForm.get('city')!;
  }
}
