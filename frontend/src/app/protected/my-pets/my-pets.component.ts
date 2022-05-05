import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PetsService } from 'src/app/pets/services/pets.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css'],
})
export class MyPetsComponent {
  selectFile: any;
  newPet: any

  get pet() {
    return this.petsService.pet;
  }

  petForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    race: ['kokerespañol', [Validators.required]],
    species: ['perro', [Validators.required]],
    photo: ['', [Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private petsService: PetsService
  ) {
    this.selectFile = null;
    this.newPet = []
  }

  file(event: any) {
    this.selectFile = <File>event.target.files[0];
  }

  createPet() {
    const { name, age, race, species, photo } = this.petForm.value
    let imgUrl = this.selectFile.name

     this.petsService.createPet(name, age, race, species, photo, imgUrl)
      .subscribe(res =>{
        console.log(this.pet)
        console.log(imgUrl)

         if(this.pet.ok === true){
             Swal.fire(
              'Good job!',
               this.pet.msg,
               'success'
             )
       }else{
           Swal.fire(
             'Ooooooooooooops!',
             res,
             'error'
           )
         }
     })
   }
  }
