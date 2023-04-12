import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ms-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
  })
  export class CreatePostComponent{
    
}