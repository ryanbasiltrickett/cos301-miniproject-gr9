import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WelcomeCarouselComponent } from './welcome-carousel.component';

@NgModule({
  declarations: [WelcomeCarouselComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [WelcomeCarouselComponent],
})
export class WelcomeCarouselModule {}
