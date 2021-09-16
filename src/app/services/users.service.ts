import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  Users() {
    return this.http.get(this.baseUrl + 'users');
  }

  viewUser(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  updateUser(id:any , userObj:any){
    return this.http.put(this.baseUrl + 'users/' + id , userObj);
  }
}
