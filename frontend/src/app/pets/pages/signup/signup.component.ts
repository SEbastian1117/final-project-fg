import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  myForm: FormGroup = this.fb.group({
    name: ['Eren chuchu' , [Validators.required] ],
    email: ['eren@gmail.com', [Validators.required, Validators.email] ],
    password: ['Clave//88', [Validators.required, Validators.minLength(6)] ]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService
    ) { }

  register(){
    console.log(this.myForm.value)
    const { name, email, password } = this.myForm.value
    // this.router.navigateByUrl('/dashboard')
    this.authService.register(name, email, password)
        .subscribe( ok =>{
          console.log(ok)
          if(ok === true){
            this.router.navigateByUrl('/dashboard')
          }else{
            Swal.fire('An error has been ocurred', ok, 'error')
          }
        })
  }

}
