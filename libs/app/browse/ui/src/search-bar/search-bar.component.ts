import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'ms-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
  })
  export class SearchBarComponent{
    searchTerm = '';

    users = [
      { name: 'John Doe', username: 'johndoe', avatar: 'https://via.placeholder.com/50' },
      { name: 'Jane Smith', username: 'janesmith', avatar: 'https://via.placeholder.com/50' },
      { name: 'Alice Johnson', username: 'alicejohnson', avatar: 'https://via.placeholder.com/50' },
      { name: 'Bob Brown', username: 'bobbrown', avatar: 'https://via.placeholder.com/50' },
    ];
    filteredUsers = [...this.users];

    filterUsers() {
      const searchTerm = this.searchTerm;

      if (!searchTerm) {
        this.filteredUsers = [...this.users];
        return;
      }

      this.filteredUsers = this.users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }