import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GetStartedCarouselComponent } from './get-started-carousel.component';

@NgModule({
  declarations: [GetStartedCarouselComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [GetStartedCarouselComponent],
})
export class GetStartedCarouselModule {}
