import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm:any = FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar){}

  get f() { return this.registerForm.controls; }

  onSubmit() {    
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    const useremail = this.f.email.value;

    if(this.submitted)
    {
      this.snackBar.open(`Registration Successful for ${useremail}.`, 'Close', {
        duration: 3000, 
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/login']);
    }
 
}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}

