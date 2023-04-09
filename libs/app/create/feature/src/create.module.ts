import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreateRouting } from './create.routing';
import { CreatePage } from './create.page.component';

@NgModule({
  imports: [CommonModule, IonicModule, CreateRouting],
  declarations: [CreatePage],
})
export class CreateModule {}
