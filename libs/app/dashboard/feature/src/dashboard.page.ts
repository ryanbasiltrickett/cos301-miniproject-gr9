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
import { Functions, httpsCallable } from '@angular/fire/functions';

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
     private  functions: Functions
    //  private eventService: EventsService
    ) {}
  
    generate() {
      console.log('Here');
      const eventI: IEvent = {eventTitle: "test", eventTime: new Date()};
      const eventReq: IEventRequest = {event: eventI};
      this.generateEvent(eventReq);
    }

    async generateEvent(request: IEventRequest) {
      return await httpsCallable<
        IEventRequest
      >(
        this.functions,
        'generateEvent'
      )(request);
    }

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
    })
    toast.present();
  }

  getPermissions(){
    let mtoken;
    return this.afMessaging.requestToken.pipe(
      tap(token => (mtoken = token))
    );
  }

  messages(){
    return this.afMessaging.messages.pipe(
      tap(msg => {
        const body: any = (msg as any).notification.body;
        this.makeToast(body);
      })
    );
  }

  async presentAlert() {
    this.getPermissions();

    const alert = await this.alertController.create({
      header: 'Notification',
      message: 'Notification sent!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
