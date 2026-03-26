import { Component, inject,OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDog } from '../../model/interface/dogs';
import { ApiResponse } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation',
  imports: [CommonModule,FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  searchItem: string = '';
  masterService = inject(MasterService);
  dest: IDog[] = []
  isLoader: boolean = true;


  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:ApiResponse)=> {
      this.dest = result.data;
      this.isLoader = false;

    }, error=> {
      alert ("Api Erro")
      this.isLoader = false;
    })
  }

  filters() {
    if(!this.filters) return this.dest;

    return this.dest.filter((item: any)=> 
      item.name.toLowerCase().includes(this.searchItem.toLowerCase()) ||
      item.category.toLowerCase().includes(this.searchItem.toLowerCase()) ||
      item.price.toString().includes(this.searchItem)
    
    )
  }

}
