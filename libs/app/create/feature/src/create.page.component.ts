import { Component } from '@angular/core';
import { CreatePost } from '@mp/app/create/util';
import { Store } from '@ngxs/store';

@Component({
  selector: 'mp-create-page',
  templateUrl: './create.page.component.html',
})
export class CreatePage {
  // remove this, put the state where it belongs
  // description = '';

  // constructor(private readonly store: Store) {}

  // uploadMedia(): void {
  //   alert('Cannot upload Media yet!');
  // }

  // post(): void {
  //   this.store.dispatch(
  //     new CreatePost({
  //       poster: 'thuthuka',
  //       description: this.description,
  //     })
  //   );
  // }

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

  post() {
    // Post functionality
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
