import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable, firstValueFrom, lastValueFrom, tap,take, takeUntil } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFireFunctions} from '@angular/fire/compat/functions';
// import { EventsService } from '@mp/api/events/feature';
import { IEvent, IEventRequest, IEventResponse } from '@mp/api/events/util';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { DashboardEvent, GetEvents } from '@mp/app/dashboard/util';
import { Store } from '@ngxs/store';
import { DashboardEventState } from '@mp/app/dashboard/data-access';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
// import { DashboardAPI } from '@mp/app/dashboard/data-access';
// import { DashboardEventState } from '@mp/app/dashboard/data-access';


@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(DashboardEventState.getEvent) events$!: Observable<IEvent[] | null>;

  // events$!: Observable<IEvent[]>;

  constructor(public alertController: AlertController,
     private toastController: ToastController, 
     private readonly store: Store,
    ) {
      // this.events$ = this.store.select(state => state.dashboard.events);
    }
  
    async ngOninit(){
      await this.getEvents();
    }

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    })
    toast.present();
  }

  userId!: string;

  async generateEvent(){
    this.makeToast('Event Requested');
    await this.getUser();
    this.store.dispatch(
      new DashboardEvent({
        user: this.userId,
      })
    );
    
    // const events = await firstValueFrom(this.events$);
    // if(events)
    //   events.forEach(e => {
    //     console.log(e.eventTime);
    //   })
  }

  async getEvents(){
    // await this.generateEvent();
    this.store.dispatch(
      new GetEvents({
        userId: this.userId,
      })
    )
  }
  async getUser(){
    const user = await firstValueFrom(this.profile$);
    if(user){
      this.userId = user.userId;
    }
  }
}
