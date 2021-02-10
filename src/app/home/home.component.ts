import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@app/shared/interfaces';
import { AuthService } from '@app/shared/services';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null;

  constructor(private authService: AuthService) { 
    this.user = null;
    authService.getUser().subscribe(val => this.user = val);
  }

  ngOnInit() {
  }

  weatherForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  get city(): AbstractControl {
    return this.weatherForm.get('city')!;
  }
}
