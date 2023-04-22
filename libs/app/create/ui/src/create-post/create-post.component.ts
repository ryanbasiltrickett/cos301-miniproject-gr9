import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatePost } from '@mp/app/create/util';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ms-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss'],
  })
  export class CreatePostComponent{
    @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
    
    constructor(private readonly store: Store) {}
    description = '';
    hashtags = '';
  
    goToEvents() {
      // Navigate to the Events page
    }
  
    goToMessages() {
      // Navigate to the Messages page
    }
  
    addLocation() {
      // Add location to the post
    }
  
    uploadPhoto() {
      // Upload photo functionality
    }
  
    uploadVideo() {
      // Upload video functionality
    }
  

  post(): void {
    this.profile$
    .subscribe(
      profile => {
        this.store.dispatch(
          new CreatePost({
            poster: profile?.username,
            description: this.description,
          })
        );
      }
    );
  }
    
  
    onFileSelected(event: any) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        // Perform any action you want with the file, such as uploading it to a server
        alert(file.name);
      }
    }
  
    onVideoSelected(event: any) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        // Perform any action you want with the file, such as uploading it to a server
        console.log(file);
      }
    }
}