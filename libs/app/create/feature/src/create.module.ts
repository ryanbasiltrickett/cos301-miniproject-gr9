import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CreateModule as CreateDataAccessModule } from '@mp/app/create/data-access';
import { CreateRouting } from './create.routing';
import { CreatePage } from './create.page.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CreateDataAccessModule,
    CreateRouting,
  ],
  declarations: [CreatePage],
})
export class CreateModule {}
