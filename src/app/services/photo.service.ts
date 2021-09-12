import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  Photos() {
    return this.http.get(this.baseUrl + 'photos');
  }
}
