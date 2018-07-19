import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  postsSubject = new Subject<Post[]>();

  posts: Post[] = [];

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }

  savePosts() {
      firebase.database().ref('/posts').set(this.posts);
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostSubject();
  }

  increaseLoveIt(post: Post) {
    this.updateLoveIt(post, +1);
  }

  decreaseLoveIt(post: Post) {
    this.updateLoveIt(post, -1);
  }

  updateLoveIt(post: Post, count: number) {
    post.loveIts += count;
    this.savePosts();
  }

}
