import { Component } from '@angular/core';
import {AuthService} from '@mp/api/auth/feature'
import {Auth} from '@angular/fire/auth';

@Component({
    selector: 'ms-reset-page',
    templateUrl: './reset.page.html',
    styleUrls: ['./reset.page.scss'],
  })

export class ResetPage {
    constructor(
        private readonly authService: AuthService, private auth: Auth
      ) {}

    async onSubmit(email: string): Promise<void> {
        try {
          await this.authService.forgotPasssword(this.auth, email);
        } catch (error) {
          console.log(error);
        }
    }
}
