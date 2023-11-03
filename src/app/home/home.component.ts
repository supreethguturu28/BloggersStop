import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

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
