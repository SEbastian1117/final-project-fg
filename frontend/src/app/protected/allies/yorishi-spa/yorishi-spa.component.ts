import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets/services/pets.service';

@Component({
  selector: 'app-yorishi-spa',
  templateUrl: './yorishi-spa.component.html',
  styleUrls: ['./yorishi-spa.component.css']
})
export class YorishiSpaComponent implements OnInit {
  public database: any = {}

  constructor(private petService: PetsService) { }

  ngOnInit(): void {
    this.getDatabase()
  }
  getDatabase(){
    this.petService.getDatabase()
      .subscribe(res => {
        this.database = res
        this.database = this.database.vets['yorishi-spa'].info
        console.log(this.database)
      })
  }

}
