import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PostListModule } from './post-list';
import { SearchBarModule } from './search-bar';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      PostListModule,
      SearchBarModule,
    ],
    exports: [
      PostListModule,
      SearchBarModule,
    ],
  })
  export class BrowseModule {}