import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import {  Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BrowseAction } from '@mp/app/browse/util';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ms-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
  })
  export class SearchBarComponent{
    searchForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly store: Store) {
    this.searchForm = this.fb.group({
      searchInput: [''],
    });
  }
  userName = "";
  searchUsers() {
    this.store.dispatch(
      new BrowseAction( {userName: this.userName})
    );
    // Implement the logic to search for users using the searchTerm
  }
}