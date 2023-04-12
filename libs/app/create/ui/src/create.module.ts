
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderModule } from './header';
import { CreatePostModule } from './create-post';


@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      CreatePostModule,
      HeaderModule,
    ],
    exports: [
        CreatePostModule,
        HeaderModule,
    ],
  })
  export class CreateModule {}