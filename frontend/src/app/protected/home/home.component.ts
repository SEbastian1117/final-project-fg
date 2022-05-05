import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pets/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get user(){    
    return `Welcome ${this.authService.user.name}`
  }

  constructor (private router: Router,
    private authService: AuthService){


  
}
}
