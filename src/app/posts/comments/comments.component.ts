import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  Comments: any;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
     this.commentService.Comments().subscribe(data =>{
     this.Comments = data;
   }
    );
  }


}
