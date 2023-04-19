import { Component } from '@angular/core';
// import { Store } from '@ngxs/store';
// import {AuthService} from '@mp/api/auth/feature'
// import {Auth} from '@angular/fire/auth';
// import { Validators } from '@angular/forms';
// import { Forget } from '@mp/app/forget/util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ms-forget-page',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  // email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  forgetForm: FormGroup;
  emailError = '';
  constructor(private formBuilder: FormBuilder) {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
   });
 }

  get email() {
    return this.forgetForm.get('email');
  }



  sendVerificationCode(){
    const email = this.forgetForm.get('email')?.value;
    console.log("Sending verification " + email);
    return;
  }

  // async sendVerificationCode(): Promise<void> {
  //   const email = this.email.value;
  //   try {
  //     await this.authService.forgotPasssword(this.auth, email);
  //     console.log('Password reset email sent successfully.');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}

