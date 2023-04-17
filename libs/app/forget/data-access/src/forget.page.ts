import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ms-forget-page',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  constructor(private readonly store: Store) {}

}
