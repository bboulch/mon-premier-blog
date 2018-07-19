import { Component, Input } from '@angular/core';

import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  onLoveIt(post: Post) {
    // post.loveIts++;
   this.postService.increaseLoveIt(post);
  }

  onDontLoveIt(post: Post) {
    // post.loveIts--;
    this.postService.decreaseLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
