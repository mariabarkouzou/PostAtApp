import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userId: any;
  userDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data.id;
    });

    if (this.userId !== '') {
      this.userService
        .viewUser(this.userId)
        .toPromise()
        .then((data) => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);
          console.log(this.userDetails);
        });
    }
  }
}
