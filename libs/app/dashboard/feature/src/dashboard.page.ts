import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFireFunctions} from '@angular/fire/compat/functions';
// import { EventsService } from '@mp/api/events/feature';
import { IEvent, IEventRequest, IEventResponse } from '@mp/api/events/util';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { DashboardEvent } from '@mp/app/dashboard/util';
import { Store } from '@ngxs/store';
// import { DashboardAPI } from '@mp/app/dashboard/data-access';
// import { DashboardEventState } from '@mp/app/dashboard/data-access';


@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  event$: Observable<IEvent>;
  constructor(public alertController: AlertController,
     private toastController: ToastController, 
     private afMessaging: AngularFireMessaging,
     private readonly store: Store,
     private  functions: Functions,
     private fun: AngularFireFunctions,
    //  private api: DashboardAPI,
    //  private eventService: EventsService
    
    ) {this.event$ = this.store.select(state => state.dashboard.event);}

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    })
    toast.present();
  }

  newEvent: string[] = [];
  async generateEvent(){
    this.makeToast('Fired');

    this.store.dispatch(
      new DashboardEvent({
        eventTitle: 'Test12',
        eventTime: new Date(),
      })
    );

    const event = await firstValueFrom(this.event$);
    this.newEvent.push(event.eventTitle);
    this.newEvent.push(event.eventTime);

  }

}
