import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pets/services/auth.service';

interface Item {
  route: string,
  text: string,
  icon: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  items: Item[] = [
    {
      route: '/dashboard/my-pets',
      text: 'My Pets',
      icon: '/assets/img/imagenes-protected/perritodepie.svg'
    },
    {
      route: '/dashboard/home',
      text: 'Home',
      icon: '/assets/img/imagenes-protected/home.svg'
    },
    {
      route: '/dashboard/my-services',
      text: 'My Services',
      icon: '/assets/img/imagenes-protected/placa perrito.svg'
    },
  ]

  get user(){    
    return `Welcome ${this.authService.user.name} your ID is ${this.authService.user.uid} and your email is ${this.authService.user.email}`
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigateByUrl('/jaeger-pets/login')
    this.authService.logout()
  }
}
