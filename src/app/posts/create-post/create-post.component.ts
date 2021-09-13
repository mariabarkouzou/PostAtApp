import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private createForm: PostService) { }

createPostForm = new FormGroup( {  
  title: new FormControl(""),
  body: new FormControl("")
} );
  
 SaveData(){
this.createForm.savePostData(this.createPostForm.value)
 }

  ngOnInit(): void {
    
  }

}
