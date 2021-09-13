import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}


  Comments() {
    return this.http.get(this.baseUrl + 'comments');
  }

  addComment(commentObj: any) {
    return this.http.post(this.baseUrl + 'comments', commentObj);
  }
}
