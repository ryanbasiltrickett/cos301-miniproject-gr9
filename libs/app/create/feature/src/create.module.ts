import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateRouting } from './create.routing';
import { CreatePage } from './create.page.component';

@NgModule({
  imports: [CommonModule, CreateRouting],
  declarations: [CreatePage],
})
export class CreateModule {}
