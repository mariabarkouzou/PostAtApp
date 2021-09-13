import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-of-posts',
  templateUrl: './list-of-posts.component.html',
  styleUrls: ['./list-of-posts.component.css']
})
export class PostsComponent implements OnInit {

  Posts: any;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
     this.postService.Posts().subscribe(data =>{
     this.Posts = data;
   }
    );
  }

}
