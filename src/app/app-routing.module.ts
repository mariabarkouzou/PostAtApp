import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './posts/comments/comments.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostsComponent } from './posts/list-of-posts/list-of-posts.component';
import { PhotosComponent } from './posts/photos/photos.component';
import { BarChartComponent } from './reports/bar-chart/bar-chart.component';
import { InfoComponent } from './reports/info/info.component';
import { UsersComponent } from './reports/users/users.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'reports', component: BarChartComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'create', component: CreatePostComponent },
  {path: "info" , component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
