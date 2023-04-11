import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ToastController } from '@ionic/angular';
// import { AngularFireFunctions} from '@angular/fire/compat/functions';
import { getMessaging, provideMessaging} from '@angular/fire/messaging';
// import {Messaging, getMessaging} from 'firebase/messaging';
// import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  
  constructor(public alertController: AlertController,
     private toastController: ToastController, 
    //  private afMessaging: AngularFireMessaging
    //  private fun: AngularFireFunctions, 
    ) {}

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    })
    toast.present();
  }

  // getPermissions(){
  //   let mtoken;
  //   return this.afMessaging.requestToken.pipe(
  //     tap(token => (mtoken = token))
  //   );
  // }

  // messages(){
  //   return this.afMessaging.messages.pipe(
  //     tap(msg => {
  //       const body: any = (msg as any).notification.body;
  //       this.makeToast(body);
  //     })
  //   );
  // }

  async presentAlert() {
    // this.getPermissions();
    // this.fun.httpsCallable('generateEvent');

    const alert = await this.alertController.create({
      header: 'Notification',
      message: 'Notification sent!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
