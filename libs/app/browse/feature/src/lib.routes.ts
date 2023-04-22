import { Route } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileStatusComponent } from '@mp/app/profile/ui';

export const appBrowseFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: BrowseComponent}
];


@NgModule({
  imports: [RouterModule.forChild(appBrowseFeatureRoutes)],
  exports: [RouterModule],
})
export class BrowseRouting {}
