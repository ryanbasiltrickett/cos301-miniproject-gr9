import { Route } from '@angular/router';
import { PostPageComponent } from './post.page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const postFeatureRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PostPageComponent },
];


@NgModule({
  imports: [RouterModule.forChild(postFeatureRoutes)],
  exports: [RouterModule],
})
export class PagePageRouting {}