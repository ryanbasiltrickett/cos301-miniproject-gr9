import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CreateState } from './create.state';
import { PostApi } from '@mp/app/post/data-access';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([CreateState])],
  providers: [PostApi],
})
export class CreateModule {}
