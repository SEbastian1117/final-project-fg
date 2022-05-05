import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
import { ColitasInquietasComponent } from './allies/colitas-inquietas/colitas-inquietas.component';
import { DrPascualComponent } from './allies/dr-pascual/dr-pascual.component';
import { PetsEmergencyComponent } from './allies/pets-emergency/pets-emergency.component';
import { YorishiSpaComponent } from './allies/yorishi-spa/yorishi-spa.component';
import { CheckPetsComponent } from './check-pets/check-pets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { MyServicesComponent } from './my-services/my-services.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'my-services',
        component: MyServicesComponent
      },
      {
        path: 'my-pets',
        component: MyPetsComponent
      },
      {
        path: 'check-pets',
        component: CheckPetsComponent
      },
      {
        path: 'add-service',
        component: AddServiceComponent
      },
      {
        path: 'colitas-inquietas',
        component: ColitasInquietasComponent
      },
      {
        path: 'dr-pascual',
        component: DrPascualComponent
      },
      {
        path: 'yorishi-spa',
        component: YorishiSpaComponent
      },
      {
        path: 'pets-emergency',
        component: PetsEmergencyComponent
      },
      {
        path: '**',
        redirectTo: 'page404'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
