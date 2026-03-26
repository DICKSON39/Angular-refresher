import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations():Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://mongodbapp-bsl9.onrender.com/api/products')
  }
}
