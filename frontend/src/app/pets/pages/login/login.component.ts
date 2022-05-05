import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['eren@gmail.com', [Validators.required, Validators.email] ],
    password: ['Clave//88', [Validators.required, Validators.minLength(6)] ]
  })

  constructor( private fb: FormBuilder,
              private router: Router,
              private authService: AuthService
    ) { }

  login(){
    console.log(this.myForm.value)
    const { email, password } = this.myForm.value
    // this.router.navigateByUrl('/dashboard')
    this.authService.login(email, password)
        .subscribe( ok =>{
          console.log(ok)
          if(ok === true){
            this.router.navigateByUrl('/dashboard/home')
          }else{
            Swal.fire('An error has been ocurred', ok, 'error')
          }
        })
  }  

}
