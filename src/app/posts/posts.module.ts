import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './list-of-posts/list-of-posts.component';
import { MatListModule } from '@angular/material/list';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { CommentPostComponent } from './comment-post/comment-post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PhotosComponent,
    CommentsComponent,
    CreatePostComponent,
    CommentPostComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 2500 },
    },
  ],
})
export class PostsModule {}
