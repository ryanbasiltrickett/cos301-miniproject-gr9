import { Route } from '@angular/router';
import { BrowsePage } from './browse.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from '@mp/app/profile/feature';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: BrowsePage},
  { path: 'home/profile', component: ProfilePage}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseRouting {}
