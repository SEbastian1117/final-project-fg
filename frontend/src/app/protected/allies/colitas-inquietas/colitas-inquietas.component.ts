import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets/services/pets.service';

@Component({
  selector: 'app-colitas-inquietas',
  templateUrl: './colitas-inquietas.component.html',
  styleUrls: ['./colitas-inquietas.component.css']
})
export class ColitasInquietasComponent implements OnInit {
  public database: any = {}

  constructor(private petService: PetsService) { }

  ngOnInit(): void {
    this.getDatabase()
  }

  getDatabase(){
    this.petService.getDatabase()
      .subscribe(res => {
        this.database = res
        this.database = this.database.vets['colitas-inquietas'].info
        console.log(this.database)
      })
  }

}
