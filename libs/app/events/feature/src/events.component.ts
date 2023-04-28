import { Component, OnInit } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable, firstValueFrom } from 'rxjs';
import { DashboardEventState } from '@mp/app/dashboard/data-access';
import { IEvent } from '@mp/api/events/util';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DashboardEvent, GetEvents } from '@mp/app/dashboard/util';
@Component({
  selector: 'mp-events-page',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
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