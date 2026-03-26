import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  

  constructor(private http:HttpClient) { }

  GetAllUsers ():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.API_URL + 'user' )

  }

  addUser (obj:IUser):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.API_URL + 'add',obj )

  }

  delete(_id:number):Observable<ApiResponse> {
     return this.http.delete<ApiResponse>(environment.API_URL  + _id )
  }

  edit(_id:number,data:IUser):Observable<ApiResponse> {
     return this.http.put<ApiResponse>(environment.API_URL  + _id,data )
  }


}
