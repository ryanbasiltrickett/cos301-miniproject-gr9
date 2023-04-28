import { Component } from '@angular/core';
import { FeedState } from '@mp/app/feed/data-access';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Select } from '@ngxs/store';
import {IProfile} from '@mp/api/profiles/util'
import { Observable } from 'rxjs';


@Component({
  selector: 'mp-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  //@Select(FeedState.profile) profile$!:Observable<IProfile | null>;
}
