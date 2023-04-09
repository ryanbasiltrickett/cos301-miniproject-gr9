import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { IonCard } from '@ionic/angular';
import { IPost } from '@mp/api/posts/util';
import { GivePostTime, LikePost } from '@mp/app/feed/util';
import { Store } from '@ngxs/store';

@Component({
  selector: 'mp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post!: IPost;
  inViewObserver!: IntersectionObserver;
  timer: NodeJS.Timer | undefined;

  constructor(private readonly store: Store, private readonly el: ElementRef) {
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

  startTimer(): void {
    this.timer = setInterval(() => {
      this.store.dispatch(new GivePostTime(this.post));
    }, 1000);
  }

  stopTimer(): void {
    if (this.timer) clearInterval(this.timer);
  }

  likePost(): void {
    this.store.dispatch(new LikePost(this.post));
  }
}
