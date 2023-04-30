import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@mp/app/auth/data-access';
import { NgxsModule } from '@ngxs/store';
import { BrowseState } from './search.state';

import { BrowseApi } from './search.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([BrowseState]), AuthModule],
  providers: [BrowseApi],
})
export class BrowseModule {}
