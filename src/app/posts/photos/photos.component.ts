import { Component, OnInit } from '@angular/core';
import {PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  Photos: any;
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
     this.photoService.Photos().subscribe(data =>{
     this.Photos = data;
   }
    );
  }
}
