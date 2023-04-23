import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SearchBarComponent],
    imports: [
      CommonModule,
      IonicModule,
      NgxSkeletonLoaderModule,
      NgxsFormPluginModule,
      ReactiveFormsModule,
      FormsModule,
      ProfileModule,
    ],
    exports: [SearchBarComponent],
  })
  export class SearchBarModule {}