import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'ms-forget-page',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  forgetForm: FormGroup;
  emailError = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
   });
 }

  get email() {
    return this.forgetForm.get('email');
  }

  async sendPasswordReset(email: string) {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        window.alert("Password reset email sent to " + email);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // console.log("Something is went wrong. Email not sent");
        window.alert("Something went wrong. Email not sent to" + email);
      });
  }
  sendVerificationCode(){
    const email = this.forgetForm.get('email')?.value;
    this.sendPasswordReset(email);
    console.log("Sending verification " + email);
    return;
  }

}

