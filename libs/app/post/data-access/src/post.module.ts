import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './post.state';
import { PostApi } from './post.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PostState])],
  providers: [PostApi],
})
export class ProfileModule {}
