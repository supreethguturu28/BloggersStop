import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private service: ServicesService, private navigate: Router, private route: ActivatedRoute) {}

  blog!: any; 
  editBlog!: any;
  id : any = this.route.snapshot.paramMap.get('id');

  OnSubmit() {
    console.log(this.editBlog.value)
    this.service.updateData(this.id, this.editBlog.value).subscribe((data)=>{
      console.log("Blog Edited Successfully");
    },
    (error)=>{
      console.log("Some Error Occured");
    });
    this.navigate.navigateByUrl('/posthome');
  }

  ngOnInit(): void { 
    this.service.getDataById(this.id).subscribe(
      (data) => {
        this.blog = data;
        this.editBlog = new FormGroup({
          id: new FormControl(this.id),
          title: new FormControl(this.blog['title'],Validators.required),
          author: new FormControl(this.blog['author'],Validators.required),
          content: new FormControl(this.blog['content'],Validators.required),
        });
      }, 
      (error) => {
        console.log("Some error occured");
      }
    );      
   }
  }
