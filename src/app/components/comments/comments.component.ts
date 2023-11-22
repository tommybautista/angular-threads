import { Component, Input, effect, signal } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() comment!: Comment;
  isExpanded = signal(false);
  isReplying = signal(false);
  nestedComments = signal<Comment[]>([])

  constructor(private commentService: CommentService){}
  
  nestedCommentsEffect = effect(() => {
    if (this.isExpanded()) {
      this.commentService
        .getComments(this.comment._id)
        .subscribe((comments) => {
          this.nestedComments.set(comments);
        });
    }
  });

  toggleExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }

  toggleReplying() {
    this.isReplying.set(!this.isReplying());
    if(this.isReplying()) {
      this.isExpanded.set(true);
    }
  }

}
