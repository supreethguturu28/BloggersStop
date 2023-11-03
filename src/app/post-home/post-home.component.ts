import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  constructor(private getBlogService: ServicesService) { }

  items !: any;

  ngOnInit(): void {
    this.getBlogService.getData().subscribe(
      (data) => {
      this.items = data;
    },
    (error) => {
      console.log('Some Error Occured');
    }
    );
  }

}
