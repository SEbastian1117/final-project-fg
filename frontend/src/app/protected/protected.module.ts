import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidebarModule } from 'ng-sidebar';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { HomeComponent } from './home/home.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { CheckPetsComponent } from './check-pets/check-pets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddServiceComponent } from './add-service/add-service.component';
import { DrPascualComponent } from './allies/dr-pascual/dr-pascual.component';
import { YorishiSpaComponent } from './allies/yorishi-spa/yorishi-spa.component';
import { PetsEmergencyComponent } from './allies/pets-emergency/pets-emergency.component';
import { ColitasInquietasComponent } from './allies/colitas-inquietas/colitas-inquietas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MyPetsComponent,
    HomeComponent,
    MyServicesComponent,
    CheckPetsComponent,
    AddServiceComponent,
    DrPascualComponent,
    YorishiSpaComponent,
    PetsEmergencyComponent,
    ColitasInquietasComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
