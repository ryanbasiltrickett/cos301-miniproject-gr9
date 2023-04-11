import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFireFunctions} from '@angular/fire/compat/functions';
// import { EventsService } from '@mp/api/events/feature';
import { IEvent, IEventRequest } from '@mp/api/events/util';
// import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;


  constructor(public alertController: AlertController,
     private toastController: ToastController, 
     private afMessaging: AngularFireMessaging,
    //  private  functions: Functions
    //  private eventService: EventsService
    ) {}

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    })
    toast.present();
  }
}
