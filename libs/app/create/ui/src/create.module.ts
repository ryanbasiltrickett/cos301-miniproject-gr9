
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreateModule as CreateAccessModule } from '@mp/app/create/data-access';
import { HeaderModule } from './header';
import { CreatePostModule } from './create-post';


@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      CreatePostModule,
      HeaderModule,
      CreateAccessModule,
    ],
    exports: [
        CreatePostModule,
        HeaderModule,
    ],
  })
  export class CreateModule {}