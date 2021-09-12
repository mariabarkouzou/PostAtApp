import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './list-of-posts/list-of-posts.component';
import { MatListModule } from '@angular/material/list';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PostsComponent,
    PhotosComponent,
    CommentsComponent,
    CreatePostComponent,
  ],
  imports: [CommonModule, MatListModule,MatGridListModule,MatCardModule],
})
export class PostsModule {}
