import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../../services/hotels.service';
import { ApiResponse } from '../../model/interface/role';
import { hotel } from '../../model/interface/hotel';
import { CommonModule, UpperCasePipe } from '@angular/common';
;

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, CommonModule,UpperCasePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
 hotel = inject(HotelsService)
 hotelList:hotel[] = [];
 currentDate: Date = new Date();


  projectForm: FormGroup = new FormGroup({
    _id: new FormControl(0),
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    location: new FormControl(''),
    noOfRooms: new FormControl(''),
    parking: new FormControl(true)

  })

   ngOnInit(): void {
    this.getAllHotels();
    
  }

  getAllHotels() {
    this.hotel.getAllHouses().subscribe((res:ApiResponse)=> {
      this.hotelList = res.data
    })
  }

  onSave () {
    const formValue =this.projectForm.value;
    debugger;
    this.hotel.addHotel(formValue).subscribe((res:ApiResponse)=> {
      if(res.result) {
        
        this.getAllHotels();
        
      }else {
        alert(res.message)
      }
    })
  }


}
