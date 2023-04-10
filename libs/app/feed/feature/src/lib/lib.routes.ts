import { Route } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeedComponent } from './feed.component';

export const appFeedFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FeedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appFeedFeatureRoutes)],
  exports: [RouterModule],
})
export class FeedRouting {}