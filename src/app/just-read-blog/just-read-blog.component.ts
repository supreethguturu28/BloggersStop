import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-just-read-blog',
  templateUrl: './just-read-blog.component.html',
  styleUrls: ['./just-read-blog.component.css']
})
export class JustReadBlogComponent implements OnInit{
  constructor( private route: ActivatedRoute, private service: ServicesService, private router: Router) { }

  public id!: string | null;
  public blog: any;

  deleteFunc(id: any) {
    this.service.deleteBlog(id).subscribe(
      (data)=>{
        console.log("Blog Deleted Successfully");
      },
      (error)=>{
        console.log("Some Error Occured while Deleting");
      }
    );
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); 
    if(this.id) {
      this.service.getDataById(this.id).subscribe(
        (data) => {
          this.blog = data;
        },
        (error) => {
          console.log("Either blog dosen't exist or error occured");
        });
    }
  }
}
