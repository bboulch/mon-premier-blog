import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';

import { PostService } from './services/post.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent },
  { path: 'new', component: NewPostComponentComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponentComponent,
    PostListComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
