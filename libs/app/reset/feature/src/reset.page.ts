import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthApi } from 'libs/app/auth/data-access/src/auth.api';

@Component({
  selector: 'ms-reset-page',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
  constructor(private readonly authApi: AuthApi) {}

  async onSubmit(email: string): Promise<void> {
    alert(
      'call the forgotPassowrd api, use the below code using the user entered email'
    );
    // try {
    //   await this.authApi.forgotPasssword(email);
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
