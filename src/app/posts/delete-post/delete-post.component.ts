import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
})
export class DeletePostComponent implements OnInit {
  postId: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.postId = data.id;
    });

    if (this.postId) {
      this.postService.deletePost(this.postId).subscribe(
        (data) => {
          console.log('Post deleted ');
        },
        (err) => {
          console.log('Error');
        }
      );
    }
  }
}
