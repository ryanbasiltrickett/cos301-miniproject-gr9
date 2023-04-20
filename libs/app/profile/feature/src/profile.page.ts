import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  selectedSegment = 'all';

  userStats = {
    posts: 2,
    followers: 23,
    following: 54,
    timeRemaining: '48 mins',
  };

  posts = [
    // Media content
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Golden Gate Bridge at sunset',
      total_time: '1 hr 5 mins',
      text: 'I visited the Golden Gate Bridge for the first time today. It was a beautiful experience, especially at sunset!',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Cup of coffee with a book',
      total_time: '35 mins',
      text: 'There\'s nothing like a good book and a warm cup of coffee on a lazy Sunday morning. What are your favorite books?',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Mountain landscape',
      total_time: '55 mins',
      text: 'I love hiking in the mountains. There\'s something magical about being surrounded by nature and breathtaking views.',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'City skyline',
      total_time: '45 mins',
      text: 'I took this photo from my apartment balcony. The city skyline is always so beautiful, especially at night.',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Sushi platter',
      total_time: '20 mins',
      text: 'Sushi is one of my favorite foods. I could eat it every day and never get tired of it!',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Puppy in a basket',
      total_time: '30 mins',
      text: 'I adopted this little guy from a shelter last month. He\'s been such a joy to have around!',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Sunset over the ocean',
      total_time: '1 hr 10 mins',
      text: 'Watching the sunset over the ocean is one of the most peaceful things I can think of.',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Snowy mountain landscape',
      total_time: '1 hr 45 mins',
      text: 'There\'s something about snow-covered mountains that always takes my breath away.',
    },
    {
      type: 'media',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
      description: 'Burger and fries',
      total_time: '25 mins',
      text: 'Sometimes you just need some comfort food, and for me that usually means a burger and fries!',
    },

    {
      type: 'text',
      text: 'I recently started learning how to code, and it has been a challenging but rewarding experience so far.',
      total_time: '45 mins',
    },

    {
      type: 'text',
      text: 'I just finished reading "The Alchemist" by Paulo Coelho, and it was a really inspiring book that reminded me to follow my dreams.',
      total_time: '1 hr',
    },

    {
      type: 'text',
      text: 'I have been trying to practice gratitude more often by writing down three things I am thankful for each day.',
      total_time: '20 mins',
    },

    {
      type: 'text',
      text: 'I love listening to podcasts, especially ones that teach me something new or make me laugh.',
      total_time: '30 mins',
    },

    {
      type: 'text',
      text: 'I recently started a new workout routine, and while it has been tough, I already feel stronger and more energized.',
      total_time: '50 mins',
      
    },
  ];
  



  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}

  goToSettings() {
    this.router.navigate(['/settings']);
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
}
