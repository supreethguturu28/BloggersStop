import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  registerForm:any = FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private snackBar: MatSnackBar,
    private authService: AuthService, private router: Router){}

  get f() { return this.registerForm.controls; }

  onSubmit() {    
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    const useremail = this.f.email.value;

    if(this.submitted)
    {
      this.snackBar.open(`Login Successful. Welcome ${useremail}.`, 'Close', {
        duration: 3000, 
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/posthome']);
    }
 
}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}
