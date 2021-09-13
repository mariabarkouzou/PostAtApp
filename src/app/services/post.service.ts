import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  Posts() {
    return this.http.get(this.baseUrl + 'posts');
  }

  addPost(postObj: any) {
    return this.http.post(this.baseUrl + 'posts', postObj);
  }

  deletePost(id: any){
    return this.http.delete(this.baseUrl + "posts/" + id)
  }
}
