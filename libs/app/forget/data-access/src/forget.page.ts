import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Forget } from '@mp/app/forget/util';

@Component({
  selector: 'ms-forget-page',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  constructor(private readonly store: Store) {}

  forget() {
      this.store.dispatch(new Forget());
  }
}
