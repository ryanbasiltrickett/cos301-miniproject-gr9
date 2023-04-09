import { Component } from '@angular/core';
import { CreatePost } from '@mp/app/create/util';
import { Store } from '@ngxs/store';

@Component({
  selector: 'mp-create-page',
  templateUrl: './create.page.component.html',
})
export class CreatePage {
  // remove this, put the state where it belongs
  description = '';

  constructor(private readonly store: Store) {}

  uploadMedia(): void {
    alert('Cannot upload Media yet!');
  }

  post(): void {
    this.store.dispatch(
      new CreatePost({
        poster: 'thuthuka',
        description: this.description,
      })
    );
  }
}
