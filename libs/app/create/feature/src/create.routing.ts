import { Route } from '@angular/router';
import { CreateComponent } from './create.page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appCreateFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: CreateComponent },
];


@NgModule({
  imports: [RouterModule.forChild(appCreateFeatureRoutes)],
  exports: [RouterModule],
})
export class CreatePostRouting {}