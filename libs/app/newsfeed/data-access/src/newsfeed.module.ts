import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mp/app/auth/data-access';
import { NewsfeedApi } from './newsfeed.api';

@NgModule({
  imports: [CommonModule, AuthModule],
  providers: [NewsfeedApi],
})
export class NewsfeedModule {}
