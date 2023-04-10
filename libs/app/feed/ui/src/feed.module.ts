import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PostModule } from './post';
import { HeaderModule } from './header';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      PostModule,
      HeaderModule,
    ],
    exports: [
      PostModule,
      HeaderModule,
    ],
  })
  export class FeedModule {}