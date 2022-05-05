import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PetsRoutingModule } from './pets-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Page404Component } from './pages/page404/page404.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamCardsComponent } from './components/team-cards/team-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { WeDoComponent } from './components/we-do/we-do.component';
import { TakeCareComponent } from './components/take-care/take-care.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    Page404Component,
    MainComponent,
    FooterComponent,
    TeamCardsComponent,
    HeaderComponent,
    WeDoComponent,
    TakeCareComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class PetsModule { }
