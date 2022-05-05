import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pets-emergency',
  templateUrl: './pets-emergency.component.html',
  styleUrls: ['./pets-emergency.component.css']
})
export class PetsEmergencyComponent implements OnInit {
  public database: any = {}

  constructor(private petService: PetsService) { }

  ngOnInit(): void {
    this.getDatabase()
  }
  getDatabase(){
    this.petService.getDatabase()
      .subscribe(res => {
        this.database = res
        this.database = this.database.vets['pets-emergency'].info
        console.log(this.database)
      })
  }

  domi(){
    const msg = prompt('Por favor ingrese el número de afiliación')
    if(msg == '2282'){
      Swal.fire(
        'The vet is on the way',
        'The vet will contact you and give you instructions while he arrives at your house',
        'success'
      )
    }else{
      Swal.fire(
        'Ooooops',
        'You do not have this service',
        'error'
      )
    }
  }

}
