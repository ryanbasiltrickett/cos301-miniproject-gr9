import { Route } from '@angular/router';
import { NotificationComponent } from './notification.page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appNotificationFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: NotificationComponent },
];


@NgModule({
  imports: [RouterModule.forChild(appNotificationFeatureRoutes)],
  exports: [RouterModule],
})
export class NotificationRouting {}