import { HttpClient } from '@angular/common/http';
import {Component, inject,OnInit } from '@angular/core';
import { ApiResponse, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-roles',
  imports: [CommonModule,FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  roleList: IRole [] = [];
  searchTerm: string ='';

  ngOnInit(): void {
    this.getAllRoles()
    
  }

  getAllRoles () {
    this.http.get<ApiResponse>('https://mongodbapp-bsl9.onrender.com/api/products').subscribe((res:ApiResponse)=> {
   this.roleList = res.data

    }, error => {
      alert('Api Error')
    })

  }

  filteredList() {
  if (!this.searchTerm) return this.roleList;

  return this.roleList.filter((item: any) =>
    item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    item.price.toString().includes(this.searchTerm)
  );
}
 
}
