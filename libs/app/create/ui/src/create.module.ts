import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreateModule as CreateAccessModule } from '@mp/app/create/data-access';
import { CreatePostModule } from './create-post';
import { HeaderModule } from '@mp/app/feed/ui';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CreatePostModule,
    CreateAccessModule,
    HeaderModule,
  ],
  exports: [CreatePostModule],
})
export class CreateModule {}
