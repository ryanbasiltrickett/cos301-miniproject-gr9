import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
//import { FeedState } from '@mp/app/feed/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular'
import { generatePost } from '@mp/app/feed/util';

@Component({
    selector: 'ms-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
  })
  export class PostComponent{

    constructor(private toastController: ToastController, public store: Store) {

    }

    onDonateClick() {
      console.log('Donate button clicked');
      // Add your donate functionality here
      this.store.dispatch(new generatePost())
    }

    onCommentClick() {
      console.log('Comment button clicked');
      // Add your comment functionality here
    }

    async onShareClick() {
      console.log('Share button clicked');
      // Add your share functionality here

      const toast = await this.toastController.create({
        message: 'copied to clipboard',
        duration: 2000,
      });
      toast.present();
    }
  }
