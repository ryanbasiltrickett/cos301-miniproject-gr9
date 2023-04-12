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
import { DashboardEvent, MyTest } from '@mp/app/dashboard/util';
import { Store } from '@ngxs/store';
import { DashboardEventState } from '@mp/app/dashboard/data-access';


@Component({
  selector: 'ms-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  token: any;
  constructor(public alertController: AlertController,
     private toastController: ToastController, 
     private afMessaging: AngularFireMessaging,
     private readonly store: Store,
     private  functions: Functions,
     private fun: AngularFireFunctions
    //  private eventService: EventsService
    ) {}

  async makeToast(message: any){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    })
    toast.present();
  }

  getPermissions(){
    return this.afMessaging.requestToken.pipe(
      tap(token => this.token = token)
    );
  }

  showMessages(){
    return this.afMessaging.messages.pipe(
      tap(msg => {
        const body: any = (msg as any).notification.body;
        this.makeToast(body);
      })
    );
  }

  generateEvent() : void{
    this.makeToast('Fired')
    this.store.dispatch(
      new DashboardEvent({
        eventTitle: 'Test12',
        eventTime: new Date(),
      })
    );
    console.log(this.store.select(DashboardEventState.getEventTitle));

    // this.store.dispatch(new MyTest());
    // const event: IEvent = {
    //   eventTitle: 'Test1',
    //   eventTime: new Date(),
    // }

    // const req: IEventRequest = {event: event};
    // this.fun.httpsCallable('generateEvent')(req).subscribe();
    // this.makeToast('Fired1')
  }

}
