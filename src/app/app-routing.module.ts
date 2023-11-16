import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { JustReadBlogComponent } from './just-read-blog/just-read-blog.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'addpost', component: AddPostComponent},
  {path:'blogs/:id', component: DetailedBlogComponent},
  {path:'editblog/:id', component: EditPostComponent},
  {path:'posthome', component: PostHomeComponent},
  {path:'posthome/blogs/:id', component: DetailedBlogComponent},
  {path:'justread/blogs/:id', component: JustReadBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
