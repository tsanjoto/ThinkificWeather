import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class LoginComponent {
  email: string | null = null;
  password: string | null = null;

  constructor(private router: Router, private authService: AuthService, private _snackBar: MatSnackBar) {}

  login(): void {
    /*
    this.authService.login(this.email!, this.password!).subscribe(() => {
      this.router.navigateByUrl('/');
    });*/

    this.authService.login(this.email!, this.password!).subscribe(
      result => {
        // Handle result
        this.router.navigateByUrl('/');
      },
      error => {
        this._snackBar.open(error.statusText, '', {
          duration: 5000,
          panelClass: ['mat-error']
        })
      },
      () => {
        // 'onCompleted' callback.
      }
    );
  }
}
