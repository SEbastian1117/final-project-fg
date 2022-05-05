import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pet } from 'src/app/pets/interfaces/interfaces';
import { PetsService } from 'src/app/pets/services/pets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-pets',
  templateUrl: './check-pets.component.html',
  styleUrls: ['./check-pets.component.css']
})
export class CheckPetsComponent implements OnInit {
  public pets: any[] = []
  public pets2: any = {}
  public url: string = '../../../assets/img/img-pets/'
  selectFile: any;
  public myUrl: any = {}

  uploadForm: FormGroup = this.fb.group({
    imgUrl: ['', [Validators.required]]
  });
  
  constructor(private petsService: PetsService,
              private fb: FormBuilder,
    ) 
  { 
    this.selectFile = null;
  }

  // photo: string = this.petComp.newPet.photo

  ngOnInit(): void {
    this.checkPets()
  }

  checkPets(){
    this.petsService.checkPets()
      .subscribe(res =>{
        let arr = res
        this.pets = arr.myPet
        console.log(this.pets)
      },
      error => {
        console.log(error)
      })
  }

  deletePet(id: string){
    Swal.fire({
      title: 'Are you sure?',
      text:"This action can not be undone",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6EDCD9',
      cancelButtonColor: '#E15FED',
      confirmButtonText: 'Delete!'
  }).then((result) => {
    if(result.isConfirmed){
      this.petsService.deletePet(id)
        .subscribe( res =>{
          Swal.fire(
            'Done',
            'Your pet has been deleted',
            'success'
          )
          this.checkPets()
        }, err => {
          console.log(err)
        })
    }
  })
}

  checkPet(id: string){
    this.petsService.checkPet(id)
      .subscribe(res => {
        let arr = res
        this.pets2 = arr
        console.log(this.pets2.myPet)
      })
  }

  file(event: any) {
    this.selectFile = <File>event.target.files[0];
  }

  updatePet(id: string, imgUrl: string){
    Swal.fire({
           title: 'Are you sure?',
           text:"This action can not be undone",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#6EDCD9',
           cancelButtonColor: '#E15FED',
           confirmButtonText: 'Update!'
       }).then((result) => {
         if(result.isConfirmed){
          this.petsService.updatePet(id, imgUrl)
             .subscribe( res =>{
               Swal.fire(
                 'Done',
                 'Your pet has been updated',
                'success'
               )
             }, err => {
               console.log(err)
             })
         }
        })
    
    // this.petsService.updatePet(id, imgUrl)
    
    //   .subscribe(res => {
    //     Swal.fire({
    //       title: 'Are you sure?',
    //       text:"This action can not be undone",
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#6EDCD9',
    //       cancelButtonColor: '#E15FED',
    //       confirmButtonText: 'Update!'
    //   }).then((result) => {
    //     if(result.isConfirmed){
    //       this.petsService.deletePet(id)
    //         .subscribe( res =>{
    //           Swal.fire(
    //             'Done',
    //             'Your pet has been updated',
    //             'success'
    //           )
    //         }, err => {
    //           console.log(err)
    //         })
    //     }
    //   })        
    //   },
    //   err => {
    //     console.log(err)
    //   }
    //   )
  }
}
