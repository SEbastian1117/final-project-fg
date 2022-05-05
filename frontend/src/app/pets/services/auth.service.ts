import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _user!: User

  get user(){
    return {...this._user}
  }

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string){
    const url = `${this.baseUrl}/auth/new`
    const body = { name, email, password}

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp =>{
          
          if(resp.ok){
            localStorage.setItem('token', resp.token!)
          }
        }),
        map(resp => resp.ok),
        catchError( err => of(err.error.msg)) //con of se convirtio el false en un observable
      )
  }


  login(email: string, password: string){
    const url = `${this.baseUrl}/auth`
    const body = { email, password}

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp =>{
          
          if(resp.ok){
            localStorage.setItem('token', resp.token!)
          }
        }),
        map(resp => resp.ok),
        catchError( err => of(err.error.msg)) //con of se convirtio el false en un observable
      )
  }

  validateToken(): Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.token!)
          if(resp.ok){
            this._user ={
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }
          }

          return resp.ok
        }),
        catchError(err => of(false) )
      )
  }

  logout(){
    localStorage.clear()
  }
}
