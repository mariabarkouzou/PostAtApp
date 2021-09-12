import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.userService.Users().subscribe(data =>{
     this.Users = data;
   }
    );
  }



}
