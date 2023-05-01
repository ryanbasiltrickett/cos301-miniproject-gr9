import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetUserPosts, SetProfile } from '@mp/app/profile/util';
import { currUser } from '@mp/app/browse/ui';
import { IGetPost } from '@mp/api/browse/util';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(ProfileState.posts) posts$!: Observable<IGetPost[] | null>;

  selectedSegment = 'all';

  browse = sessionStorage.getItem('browse');
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private store: Store) {
    this.activeRoute.paramMap.subscribe(params => {
      this.checkProfile();
    });
  }

  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is home/dashboard and the previous route was home/profile
        if (event.url !== '/home/profile') {
          // Call your function here that should be called when the route changes
          this.resetProfile();
        }
      }
    });

    this.store.dispatch(
      new GetUserPosts()
    );
  }

  goToSettings() {
    this.router.navigate(['/home/settings']);
  }

  donate(post: any) {
    console.log('Donate:', post);
    // Implement the donate functionality
  }

  comment(post: any) {
    console.log('Comment:', post);
    // Implement the comment functionality
  }

  share(post: any) {
    console.log('Share:', post);
    // Implement the share functionality
  }

  resetProfile(){
    if(currUser != null){
      this.store.dispatch(
        new SetProfile(currUser)
      )      
    }

    sessionStorage.clear();
  }

  checkProfile(){
    this.browse = sessionStorage.getItem('browse');
  }
}
