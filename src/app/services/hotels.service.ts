import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotel, HotelResponse } from '../model/interface/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http:HttpClient) { }

  getAllHouses ():Observable<HotelResponse> {
    return this.http.get<HotelResponse>(`https://mongodbapp-bsl9.onrender.com/api/hotel`)

    
  }

  addHotel (obj:hotel):Observable<HotelResponse> {
     return this.http.post<HotelResponse>(`https://mongodbapp-bsl9.onrender.com/api/hotel`,obj)
  }
}
