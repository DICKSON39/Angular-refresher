import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from "../hotels/hotels.component";


@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent, CommonModule, HotelsComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = 'Roles';

  changeTab (tabName: string) {
    this.currentComponent = tabName;

  }



}
