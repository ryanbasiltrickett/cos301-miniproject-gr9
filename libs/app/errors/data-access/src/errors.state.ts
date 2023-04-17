import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SetError } from '@mp/app/errors/util';
import { Action, State, StateContext } from '@ngxs/store';
import produce from 'immer';

export interface ErrorsStateModel {
  error: string | null;
}

@State<ErrorsStateModel>({
  name: 'errors',
  defaults: {
    error: null,
  },
})
@Injectable()
export class ErrorsState {
  constructor(private readonly toastController: ToastController) {}

  @Action(SetError)
  async setError(ctx: StateContext<ErrorsStateModel>, { error }: SetError) {
    if (!error) return;

    let message = "";

    if(error == "Firebase: Error (auth/popup-closed-by-user).")
    {
        message = "Sign in cancelled. Please try again.";
    }
    else if(error == "Firebase: Error (auth/invalid-email).")
    {
      message = "The email address you entered is not valid. Please check that you entered the correct email address or Sign up";
    }
    else if(error == "Firebase: Error (auth/user-disabled).")
    {
      message = "Sorry, this account has been disabled. Please contact the administrator to resolve this issue.";
    }
    else if(error == "Firebase: Error (auth/wrong-password).")
    {
      message = "Incorrect password. Please try again.";
    }
    else if(error == "Firebase: Error (auth/email-already-in-use).")
    {
        message = "This email address is already registered. Please login or use a different email address.";
    }
    else if(error == "Firebase: Error (auth/account-exists-with-different-credential).")
    {
        message = "This email address is already registered with a different sign-in method. Please sign in with the same method used to create the account, or use a different email address.";
    }
    else if(error == "Firebase: Error (auth/user-not-found).")
    {
        message = "Invalid email or password. Please check your email and password and try again or sign up.";
    }
    else if(error == "Firebase: Error (auth/network-request-failed).")
    {
        message = "Unable to connect to the server. Please check your internet connection and try again later.";
    }
    else
    {
      message = "An error has occurred. Please try again later.";
    }

    ctx.setState(
      produce((draft) => {
        draft.error = message;
      })
    );

    const toast = await this.toastController.create({
      message,
      color: 'danger',
      duration: 3500,
      position: 'bottom',
    });

    await toast.present();
  }
}
