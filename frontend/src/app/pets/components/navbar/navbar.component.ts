import { Component } from '@angular/core';

interface Item {
  route: string,
  text: string
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  item: Item[] = [
    {
      route: '/jaeger-pets/home',
      text: 'Home'
    },
    {
      route: '/jaeger-pets/login',
      text: 'Login'
    },
    {
      route: '/jaeger-pets/signup',
      text: 'SignUp'
    },
  ]
  
}
