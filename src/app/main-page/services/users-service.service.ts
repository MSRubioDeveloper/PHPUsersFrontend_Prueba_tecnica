import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../interfaces/users-response.interface';
import { environments } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private api_url = environments.API_URL;

  constructor( private http: HttpClient) { }


  //Conexion a la api
  public getAllUsers(): Observable<UserResponse[]>{
    
    return this.http.get<UserResponse[]>( this.api_url)
                  
  }


  public searchUserByID( id: number ){

    return this.http.get<UserResponse[]>( this.api_url )
  }
}
