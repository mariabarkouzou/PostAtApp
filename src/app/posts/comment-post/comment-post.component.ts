import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private commentService: CommentService,private _snackBar: MatSnackBar ) { }

  commentPostForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.commentPostForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(""),
      body: new FormControl(''),
     })
    }

    PostComment() {
      this.commentService.addComment(this.commentPostForm.value).subscribe(
        (data) => {
          this._snackBar.open('Comment has been successfully submitted ');
        },
        (err) => {
          this._snackBar.open("Comment couldn't be submitted");
        }
      );
    }


  }