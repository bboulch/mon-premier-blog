import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Post } from '../models/Post.model';

@Injectable()
export class PostService {

  postsSubject = new Subject<Post[]>();

  posts: Post[] = [
    new Post('Mon premier blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 0, new Date()),
    new Post('Mon deuxième blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 10, new Date()),
    new Post('Mon troisième blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', -1, new Date())
  ];

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPostSubject();
  }

  removePost(post: Post) {
  }

}
