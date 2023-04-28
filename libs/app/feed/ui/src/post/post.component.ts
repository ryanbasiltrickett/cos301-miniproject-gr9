import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IonCard } from '@ionic/angular';
import { ICommentPostRequest, IPost } from '@mp/api/posts/util';
import { CommentPost, GivePostTime, LikePost } from '@mp/app/feed/util';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular'
import { IComment  } from '@mp/api/newsfeed/util';
import { Router } from '@angular/router';
import { ProfileState } from '@mp/app/profile/data-access';
import { IProfile } from '@mp/api/profiles/util';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'mp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Input() post!: IPost;
  @Output() donateTime = new EventEmitter<IPost>();

  inViewObserver!: IntersectionObserver;
  timer: NodeJS.Timer | undefined;

  constructor(
    private readonly store: Store,
    private readonly el: ElementRef,
    private toastController: ToastController,
    private router: Router
    ) {
    this.inViewObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          // One could use this control flow to subscibe to updated to a post
          if (entry.isIntersecting) {
            this.startTimer();
          } else {
            this.stopTimer();
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    this.inViewObserver.observe(this.el.nativeElement);
  }

  goToPostPage(): void {
    this.router.navigate(['/home/post', this.post.id]);
  }

  startTimer(): void {
    this.profile$
    .pipe(take(1))
    .subscribe(
      profile => {
          if (this.post.author !== profile?.username) {
            this.timer = setInterval(() => {
              this.store.dispatch(new GivePostTime(this.post));
            }, 1000);
          }
      }
    );
  }

  stopTimer(): void {
    if (this.timer) clearInterval(this.timer);
  }

  likePost(): void {
    this.store.dispatch(new LikePost(this.post));
  }

  onDonateClick() {
    this.donateTime.emit(this.post);
  }

  onCommentClick() {
    console.log('Comment button clicked');
    // Add your comment functionality here

    // const commentText = 'Hard coded'
    // const usernameText = 'Hard coded'
    // const commentDetails : IComment = {
    //   userId: '1',
    //   text: commentText,
    //   username: usernameText
    // }

    // const request : ICommentPostRequest = {
    //   postId: this.post.id,
    //   comment: commentDetails
    // }

    // this.store.dispatch( new CommentPost(request) )
  }

  async onShareClick() {
    console.log('Share button clicked');
    // Add your share functionality here

    alert('/home/post/' + this.post.id);

    const toast = await this.toastController.create({
      message: 'copied to clipboard',
      duration: 2000,
    });
    toast.present();
  }
}
