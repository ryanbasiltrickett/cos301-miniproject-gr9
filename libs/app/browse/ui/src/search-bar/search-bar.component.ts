import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'mp-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
  })
  export class SearchBarComponent{
    searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchInput: [''],
    });
  }

  searchUsers() {
    const searchTerm = this.searchForm.get('searchInput')?.value;
    // Implement the logic to search for users using the searchTerm
    console.log('Search term:', searchTerm);
  }
}