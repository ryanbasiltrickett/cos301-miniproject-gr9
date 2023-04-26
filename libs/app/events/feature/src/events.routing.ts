import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

export const appEventsFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: EventsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(appEventsFeatureRoutes)],
  exports: [RouterModule],
})
export class EventsRouting {}
