import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, firstValueFrom, lastValueFrom, tap,take, takeUntil } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IEvent, IEventRequest, IEventResponse } from '@mp/api/events/util';
import { DashboardEvent, GetEvents } from '@mp/app/dashboard/util';
import { Store } from '@ngxs/store';
import { DashboardEventState } from '@mp/app/dashboard/data-access';


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
     private readonly activeRoute: ActivatedRoute,
    ) {
      this.activeRoute.paramMap.subscribe(params => {
        this.ngOnInit();
    });
    }
  
    async ngOnInit(){
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
  }

  async getEvents(){
    await this.getUser();
    this.store.dispatch(
      new GetEvents({
        userId: this.userId,
      })
    )
  }
  async getUser(){
    const user = await firstValueFrom(this.profile$);
    if(user){
      this.userId = user.id;
    }
  }
}
