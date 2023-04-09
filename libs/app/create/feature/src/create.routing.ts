import { RouterModule, Routes } from '@angular/router';
import { CreatePage } from './create.page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', pathMatch: 'full', component: CreatePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRouting {}
