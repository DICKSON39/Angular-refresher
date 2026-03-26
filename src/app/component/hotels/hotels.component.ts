import { Component, inject,OnInit } from '@angular/core';
import { hotel, HotelResponse } from '../../model/interface/hotel';
import { HotelsService } from '../../services/hotels.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule,FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  housingList:hotel [] = [];
 hotelService = inject(HotelsService)
 searchInput:string = '';

 ngOnInit(): void {
   this.hotelService.getAllHouses().subscribe((result:HotelResponse)=> {
    this.housingList = result.data
   },error=> {
    console.error(error)
   })
 }

 filterHotels () {
  if(!this.filterHotels) return this.housingList;
  
   return this.housingList.filter((item: any)=> 
      item.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
      item.location.toLowerCase().includes(this.searchInput.toLowerCase())
    
    )
  }
 }
