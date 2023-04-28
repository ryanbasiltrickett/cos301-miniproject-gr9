import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page.component';
import { NgModule } from '@angular/core';
import { EventsComponent } from '@mp/app/events/feature';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FeedPage },
  { path: 'home/events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRouting {}
