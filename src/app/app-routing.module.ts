import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPostComponent } from './posts/comment-post/comment-post.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';
import { PostsComponent } from './posts/list-of-posts/list-of-posts.component';
import { PhotosComponent } from './posts/photos/photos.component';
import { BarChartComponent } from './reports/bar-chart/bar-chart.component';
import { EditComponent } from './reports/edit/edit.component';
import { UsersComponent } from './reports/users/users.component';
import { ViewComponent } from './reports/view/view.component';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      { path: '', component: PostsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'create-post', component: CreatePostComponent },
      {path:"delete-post/:id" , component: DeletePostComponent},
      {path:"comment-post" , component:CommentPostComponent}
    ],
  },
  {
    path: 'reports',
    children: [
      { path: 'bar-chart', component: BarChartComponent },
      { path: 'users', component: UsersComponent },
      { path: 'view/:id', component: ViewComponent },
      { path: 'edit/:id', component: EditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
