import { NgModule } from '@angular/core';
import { EventModule } from './event';

@NgModule({
  imports: [EventModule],
  exports: [EventModule],
})
export class EventsModule {}
