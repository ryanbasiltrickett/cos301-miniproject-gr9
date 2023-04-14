import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
//import { FeedState } from '@mp/app/feed/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ms-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
  })
  export class PostComponent{
    
      public NoOfLikes = 0 ;
    	public Isliked = false;

      public toggleLike(event: Event) {

      this.Isliked = !this.Isliked;


      if (this.Isliked) 
      {
        this.NoOfLikes++;
        (event.currentTarget as HTMLIonButtonElement).querySelector('#heartIcon')?.setAttribute("name", "heart");
        
      } 
      else 
      {
        this.NoOfLikes--;
        (event.currentTarget as HTMLIonButtonElement).querySelector('#heartIcon')?.setAttribute("name", "heart-outline");
      }

    }
  }
