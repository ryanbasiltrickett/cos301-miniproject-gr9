import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  })
  export class HeaderComponent{
    //constructor() {}

    // Add the goToEvents method
    goToEvents(): void {
      console.log('Go to Events');
      // Implement navigation to the events page
    }
  
    // Add the goToMessages method
    goToMessages(): void {
      console.log('Go to Messages');
      // Implement navigation to the messages page
    }
  }