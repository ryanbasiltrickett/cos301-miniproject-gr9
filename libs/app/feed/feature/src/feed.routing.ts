import { RouterModule, Routes } from '@angular/router';
import { FeedPage } from './feed.page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FeedPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRouting {}
