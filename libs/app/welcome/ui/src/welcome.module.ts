import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TimeShareCarouselModule } from './time-share-carousel';
import { WelcomeCarouselModule } from './welcome-carousel';
import { GetStartedCarouselModule } from './get-started-carousel';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TimeShareCarouselModule,
    WelcomeCarouselModule,
    GetStartedCarouselModule,
  ],
  exports: [
    TimeShareCarouselModule,
    WelcomeCarouselModule,
    GetStartedCarouselModule,
  ],
})
export class WelcomeModule {}
