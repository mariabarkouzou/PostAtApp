import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  Users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.userService.Users().subscribe(data =>{
     this.Users = data;
   }
    );
  }

}
