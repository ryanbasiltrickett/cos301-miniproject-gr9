import {
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ToastController } from '@ionic/angular'
import { IComment  } from '@mp/api/newsfeed/util';
import { Router } from '@angular/router';
import { PostState } from '@mp/app/post/data-access';
import { Observable} from 'rxjs';

@Component({
  selector: 'mp-comment',
  templateUrl: './comment.compoment.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Select(PostState.comments) comments$!: Observable<IComment[] | null>[];
  @Input() comment!: IComment;
  constructor(
    private readonly store: Store,
    private readonly el: ElementRef,
    private toastController: ToastController,
    private router: Router
    ) {}
}
