import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, of } from 'rxjs';
import { Pet, PetResponse } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private url: string = environment.baseUrl2
  private _pet!: Pet

  get pet(){
    return { ...this._pet }
  }

  api = `${this.url}`

  constructor(private http: HttpClient) { }

  createPet( name: string, age: number, race: string, species: string, photo: string, imgUrl: string){
    const body = { name, age, race, species, photo, imgUrl }
    return this.http.post<Pet>(`${this.api}/new-pet`, body)
        .pipe(
          tap( res => {
            if(res.ok ){
              this._pet = {
                ok: res.ok,
                msg:res.msg,
                name: name,
                age: age,
                race: race,
                species: species,
                photo: photo,
                imgUrl: imgUrl
              }
            }
          }

          ),
          map( res => res.ok ),          
          catchError(err => of(err.error.msg))
        )
  }

  checkPet(id: string): Observable<any>{
    return this.http.get(`${this.api}/new-pet/${id}`)      
  }

  checkPets(): Observable<any>{
    return this.http.get(`${this.api}/new-pet/check`)
  }

  updatePet(id: string, url: string): Observable<any>{
    return this.http.put(`${this.api}/update/${id}`, {imgUrl: url})
  }

  deletePet(id: string): Observable<any> {
    return this.http.delete(`${this.api}/delete/${id}`)
  }
  getDatabase(): Observable<any>{
    return this.http.get(`${this.api}/database`)
  }
}
