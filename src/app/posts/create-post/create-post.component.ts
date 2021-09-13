import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {}

  createPostForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createPostForm = this.formBuilder.group({
      title: new FormControl(''),
      body: new FormControl(''),
    });
  }
  SaveData() {
    this.postService.addPost(this.createPostForm.value).subscribe(
      (data) => {
        this._snackBar.open('Post has been submitted successfully');
      },
      (err) => {
        this._snackBar.open("Post couldn't be submitted");
      }
    );
  }
}
