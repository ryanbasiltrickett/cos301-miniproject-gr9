import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { CreatePost } from '@mp/app/create/util';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ms-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss'],
  })
  export class NotificationListComponent{
    
}