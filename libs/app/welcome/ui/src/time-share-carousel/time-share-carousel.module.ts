import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TimeShareCarouselComponent } from './time-share-carousel.component';

@NgModule({
  declarations: [TimeShareCarouselComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [TimeShareCarouselComponent],
})
export class TimeShareCarouselModule {}
