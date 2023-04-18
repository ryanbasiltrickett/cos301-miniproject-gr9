import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import {  Store, StateContext } from '@ngxs/store';
import { Observable, firstValueFrom } from 'rxjs';
import { BrowseAction, ClearBrowseAction } from '@mp/app/browse/util';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrowseState, BrowseStateModel } from '@mp/app/browse/data-access';
import { IUser } from '@mp/api/users/util';

@Component({
    selector: 'ms-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
  })
  export class SearchBarComponent{
    searchForm: FormGroup;
    users$: Observable<IUser[]>

  constructor(private fb: FormBuilder, private readonly store: Store) {
    this.searchForm = this.fb.group({
      searchInput: [''],
    });
    this.users$ = this.store.select(state => state.browse.users);
  }

  userName = "";
  foundUsers: IUser[] | undefined;
  async searchUsers() {
    this.store.dispatch(
      new BrowseAction( {userName: this.userName})
    );
    
    this.foundUsers = await firstValueFrom(this.users$);
    if(this.foundUsers){
      this.foundUsers.forEach(user => {
        console.log(user.email);
      })      
    }
  }

  async clearSearch(){
    this.foundUsers = [];
    this.store.dispatch(
      new ClearBrowseAction()
    )
  }
}