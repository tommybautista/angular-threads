import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  
  isExpanded = false;
  isReplying = false;

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  toggleReplying() {
    this.isReplying = !this.isReplying;
    if(this.isReplying) {
      this.isExpanded = true;
    }
  }

}
