import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets/services/pets.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  public database:any = {} 
  public data: any = this.database.vets

  constructor(private petService: PetsService) { }

  ngOnInit(): void {
    this.getDatabase()
  }
  getDatabase(){
    this.petService.getDatabase()
      .subscribe(res => {
        this.database = res
      })
  }
}
