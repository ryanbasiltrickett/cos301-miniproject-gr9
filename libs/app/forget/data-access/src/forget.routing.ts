import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPage } from './forget.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForgetPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetRouting {}
